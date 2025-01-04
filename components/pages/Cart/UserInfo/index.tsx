import { Button, Card, CardBody, CardFooter, Divider, HStack, Heading, Text } from '@chakra-ui/react'
import { handleError } from 'API/error'
import ChakraInputDropdown from 'components/ChakraInputDropdown'
import { getRentLengthOptionsSelect } from 'components/pages/CMS/OrderManagement/Order/OrderDetail/utils'
import dayjs from 'dayjs'
import { EOrderStatusEnum } from 'enums/order'
import { EZIndexLayer } from 'enums/theme'
import { useStores } from 'hooks/useStores'
import { IOrder } from 'interfaces/order'
import { capitalize } from 'lodash'
import omit from 'lodash/omit'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'
export interface ICartUserInfoProps {
  order: IOrder
}

const CartUserInfo = (props: ICartUserInfoProps) => {
  const { order } = props
  const { websiteOrderStore, spinnerStore } = useStores()
  const { isLoading } = spinnerStore
  const methods = useForm({
    mode: 'onChange'
  })
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
    getValues
  } = methods
  const { authStore } = useStores()
  const { user } = authStore
  const [orderStatus, setOrderStatus] = useState<EOrderStatusEnum>(order?.orderStatus ?? EOrderStatusEnum.NEW)
  const formRentLength = useWatch({ control, name: 'formRentLength', defaultValue: 1 })

  async function onSubmit(data: IOrder): Promise<void> {
    try {
      spinnerStore.showLoading
      const formattedData: IOrder = {
        ...omit(data, 'formUserName', 'formStatus', 'formRentLength'),
        rentLength: Number(formRentLength?.value),
        orderStatus: EOrderStatusEnum.ORDERED,
        totalPrice: Number(data?.totalPrice) * Number(formRentLength?.value),
      }
      await websiteOrderStore.updateOrder(formattedData)
      setOrderStatus(EOrderStatusEnum.ORDERED)
      toast.success('Place order successfully!')
    } catch (error) {
      toast.error('Place order failed!')
      handleError(error as Error, 'components', 'onSubmit')
    } finally {
      spinnerStore.hideLoading
    }
  }

  useEffect(() => {
    reset(order)
  }, [order])
  console.log(order?.totalPrice)
  console.log(formRentLength)
  // console.log(`${Number(order?.totalPrice) * Number(order?.rentLength)} USD`)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card width={{ lg: '400px' }}>
          <CardBody>
            {user?.firstName && user?.lastName && (
              <Heading size="md">
                {user.firstName} {user.lastName}
              </Heading>
            )}
            <Text>{user.email}</Text>
            {user?.phoneNumber && <Text>{user.phoneNumber}</Text>}
            <ChakraInputDropdown
              zIndex={EZIndexLayer.FILTER_BAR}
              name="formRentLength"
              label="Rent Length"
              optionsData={getRentLengthOptionsSelect()}
            />
            <Divider flexGrow={1} marginTop={4} marginBottom={4} />
            {order?.dueDate && <Text>{`Due Date: ${dayjs(order?.dueDate).format('MM/DD/YYYY')}`}</Text>}
            <HStack justifyContent={'space-between'}>
              <Text as={'b'}>Total:</Text>
              <HStack spacing={4}>
                <Text fontSize="lg" as={'b'} color={'teal.500'}>
                  {`${Number(order?.totalPrice) * Number(formRentLength?.value ?? 1)} USD`}
                </Text>
              </HStack>
            </HStack>
          </CardBody>
          <CardFooter>
            <Button
              isDisabled={orderStatus !== EOrderStatusEnum.NEW}
              colorScheme="teal"
              variant="solid"
              flexGrow={1}
              type="submit"
              isLoading={isSubmitting || isLoading}
            >
              {orderStatus === EOrderStatusEnum.NEW ? ' Place Order' : capitalize(orderStatus)}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  )
}

export default observer(CartUserInfo)
