export interface IRenterFAQ {
  title: string
  questions: IQuestion[]
}

export interface IQuestion {
  question: string
  ideas?: string[]
  answer: string
  haveLink?: boolean
  secondAnswer?: string
}

export const renterFAQs: IRenterFAQ[] = [
  {
    title: 'User Account Management',
    questions: [
      {
        question: 'How can I create an account?',
        answer:
          'To create an account, you can either register using your email and password or sign up through your Google account.'
      },
      {
        question: 'What information can I manage in my profile?',
        answer:
          'Users can manage their personal information, such as name, email, and password. Additionally, you can update your addresses, payment methods, and preferences like language, theme, and block list, or delete your account.'
      },
      {
        question: 'How can I view my order history?',
        answer:
          'You can view your past orders and track current orders by going to your profile and clicking on "Order History." You can also re-order items directly from this section.'
      },
      {
        question: 'How can I manage my wishlist?',
        answer:
          'You can add items to your wishlist to save them for future purchases. You can manage or remove items from your wishlist at any time.'
      }
    ]
  },
  {
    title: 'Product Management & Shopping Experience',
    questions: [
      {
        question: 'How can I find products on the platform?',
        answer:
          'You can use the search bar to look for products by keyword, category, or brand. Additionally, you can browse through categories and subcategories from the main menu.'
      },
      {
        question: 'Can I compare different products?',
        answer:
          'Yes, our platform offers a comparison feature that allows you to compare similar products based on price, features, and customer reviews.'
      },
      {
        question: 'How can I leave a product review?',
        answer:
          'After purchasing a product, you can leave a review and rating by visiting the product page. Your feedback helps others make informed decisions.'
      }
    ]
  },
  {
    title: 'Payments & Checkout',
    questions: [
      {
        question: 'What payment methods are accepted?',
        answer:
          'We accept various payment methods, including credit/debit cards, PayPal, digital wallets, and Buy Now, Pay Later options.'
      },
      {
        question: 'How can I apply a discount or coupon code?',
        answer:
          'During checkout, there will be a section where you can apply discount or coupon codes to receive your discount.'
      },
      {
        question: 'Can I save my payment methods for future purchases?',
        answer: 'Yes, you can save your payment information securely for faster checkout in the future.'
      }
    ]
  },
  {
    title: 'Orders & Delivery',
    questions: [
      {
        question: 'Can I track my order?',
        answer:
          'Yes, once your order is placed, you will receive tracking information via email or SMS. You can also track your order in your account under "Order History."'
      },
      {
        question: 'What are my shipping options?',
        answer:
          'We offer multiple shipping options, including standard and express shipping. Delivery estimates will be shown during checkout based on your selected method.'
      },
      {
        question: 'Can I modify or cancel my order?',
        answer:
          'You can modify or cancel your order before it ships by going to your account and selecting the order you want to update.'
      }
    ]
  },
  {
    title: 'Returns & Refunds',
    questions: [
      {
        question: 'How do I initiate a return?',
        answer:
          'To initiate a return, go to your account and click on "Order History." Select the order and choose the return option to follow the process.'
      },
      {
        question: 'What is your return policy?',
        answer:
          'Our return policy is clearly displayed on each product page and during checkout. Please review the return policy before completing your purchase.'
      }
    ]
  },
  {
    title: 'Vendor/Seller Management',
    questions: [
      {
        question: 'How can I become a seller on MarketNest?',
        answer:
          'To become a seller, you can sign up for a seller account by visiting our Seller Registration page. After approval, you will be able to upload and manage your products.'
      },
      {
        question: 'What tools do sellers have to manage their sales?',
        answer:
          'Sellers have access to a dashboard where they can view sales analytics, revenue reports, and manage customer feedback. They can also upload new products and update their listings.'
      }
    ]
  },
  {
    title: 'Customer Support',
    questions: [
      {
        question: 'How can I contact customer service?',
        answer:
          'You can reach our customer service through live chat, email, or phone. Visit our Support page for more contact details.'
      }
    ]
  }
]
