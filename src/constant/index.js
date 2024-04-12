import { Avalanche, BNB, Bitcoin, Ethereum, Illustration_1, Illustration_10, Illustration_2, Illustration_22, Illustration_3, Illustration_7, Illustration_8, Illustration_9, Polkadot, Polygon, Solana, Lock, Wallet, Phone, Tether, XRP, USDC, Doge, Shiba, Toncoin, Tron, Bitcoin_cash, Near, Uniswap, Litecoin, Aptos, IMX, Cosmos, Optimism, Stellar, GRT, DAI, Injective, Hbar, Render, Stacks, Pepe, Bittensor, VeChain, ThorChain, LidoDao, Celestia, Illustration_4, Illustration_6, Illustration_14, Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6, Logo_7, Logo_8, Logo_9, Logo_10, Image_1, Image_2, Image_3, Apple, Android, Chrome, Mail, Discord, Telegram } from "@/assets";

const marques = [
  { type: "name", label: "decentralized" },
  { type: "empty", label: "" },
  { type: "name", label: "Secure" },
  { type: "empty", label: "" },
  { type: "name", label: "Fast" },
  { type: "empty", label: "" },
  { type: "name", label: "Open-Source" },
  { type: "empty", label: "" },
  { type: "name", label: "Transparent" },
  { type: "empty", label: "" },
  { type: "name", label: "Unique" },
  { type: "empty", label: "" },
  { type: "name", label: "Friendly" },
  { type: "empty", label: "" },
  { type: "name", label: "trustworthy" },
  { type: "empty", label: "" },
  { type: "name", label: "decentralized" },
  { type: "empty", label: "" },
  { type: "name", label: "Secure" },
  { type: "empty", label: "" },
  { type: "name", label: "Fast" },
  { type: "empty", label: "" },
  { type: "name", label: "Open-Source" },
  { type: "empty", label: "" },
  { type: "name", label: "Transparent" },
  { type: "empty", label: "" },
  { type: "name", label: "Unique" },
  { type: "empty", label: "" },
  { type: "name", label: "Friendly" },
  { type: "empty", label: "" },
  { type: "name", label: "trustworthy" },
  { type: "empty", label: "" },
];

const links = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#coins", label: "Coins" },
  { href: "#security", label: "Security" },
];

const linksSmall = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#coins", label: "Coins" },
  { href: "#security", label: "Security" },
  { href: "#support", label: "Support" },
  { href: "#downoald", label: "Downoald" },
];

const cards = [
  {
    title: "Easy Onboarding & Simple Use",
    imgSrc: Illustration_1,
    subtitle: "Get started in minutes with our intuitive and friendly experience. No crypto knowledge required.",
    type: "normal",
    order: 'first',
    animation: "row1"
  },
  {
    title: "Advanced Security Features",
    imgSrc: Illustration_3,
    subtitle: "Industry-leading security features and secure backup options keep your crypto safe and accessible.",
    type: "normal",
    order: 'first',
    animation: "row1"
  },
  {
    title: "Secure Staking & Earn Rewards",
    imgSrc: Illustration_2,
    subtitle: "Earn passive income with secure staking options. Grow your portfolio while your crypto works for you.",
    type: "normal",
    animation: "row1"
  },
  {
    title: "Customizable Watchlist & Price Alerts",
    imgSrc: Illustration_22,
    subtitle: "Create a personalized watchlist and set price alerts to stay informed about market movements.",
    type: "big",
    animation: "row2"
  },
  {
    title: "Stay Informed, Invest Confidently",
    imgSrc: Illustration_7,
    subtitle: "Staying informed and making smart investment decisions through the in-app news feed.",
    type: "new",
    animation: "row2"
  }, {
    title: "Multi-Currency Support",
    imgSrc: Illustration_9,
    subtitle: "Effortlessly manage a diverse portfolio of cryptocurrencies in a single, user-friendly interface.",
    type: "normal",
    animation: "row3"
  }, {
    title: "Sync Across Devices",
    imgSrc: Illustration_8,
    subtitle: "Sync your wallet seamlessly across multiple devices, ensuring access to your assets wherever you go.",
    type: "normal",
    animation: "row3"
  }, {
    title: "24/7 Customer Support",
    imgSrc: Illustration_10,
    subtitle: "Our dedicated team of experts, ready to assist you with any inquiries or issues you may encounter.",
    type: "normal",
    animation: "row3"
  }
];

const rows = [
  { srcImg: BNB, label: "BNB Smart Chain (BNB)", results: [true, true, true, true] },
  { srcImg: Ethereum, label: "Ethereum (ETH)", results: [true, true, true, false] },
  { srcImg: Bitcoin, label: "Bitcoin (BTC)", results: [true, true, false, false] },
  { srcImg: Solana, label: "Solana (SOL))", results: [true, true, true, true] },
  { srcImg: Avalanche, label: "Avalanche (AVAX)", results: [true, true, false, true] },
  { srcImg: Polygon, label: "Polygon (MATIC)", results: [true, true, true, true] },
  { srcImg: Polkadot, label: "Polkadot (DOT", results: [true, true, true, false] },
];

const abouts = [
  { srcImg: Lock, title: "Keep Your Crypto Safe", subtitle: "Rest easy knowing your digital assets are protected by our robust security features, keeping hackers at bay." },
  { srcImg: Wallet, title: "Manage Everything Easily", subtitle: "Effortlessly handle your crypto portfolio in one place, making transactions simple and intuitive." },
  { srcImg: Phone, title: "Access Anywhere", subtitle: "Stay connected to your crypto world on the go, with seamless syncing across all your devices." },
];

const cryptocurrencies = [
  [
    { srcImg: Bitcoin, title: "Bitcoin", subtitle: "BTC", id: 111 },
    { srcImg: Ethereum, title: "Ethereum", subtitle: "ETH", id: 2 },
    { srcImg: Tether, title: "Tether", subtitle: "USDT", id: 3 },
    { srcImg: BNB, title: "BNB", subtitle: "BNB", id: 4 },
    { srcImg: Solana, title: "Solana", subtitle: "SOL", id: 51 },
    { srcImg: XRP, title: "XRP", subtitle: "XRP", id: 6 },
    { srcImg: USDC, title: "USDC", subtitle: "USDC", id: 7 },
    { srcImg: Bitcoin, title: "Bitcoin", subtitle: "BTC", id: 8 },
    31
  ],
  [
    { srcImg: Tron, title: "Tron", subtitle: "TRX", id: 9 },
    { srcImg: Polygon, title: "Polygon", subtitle: "MATIC", id: 10 },
    { srcImg: Doge, title: "Dogecoin", subtitle: "Doge", id: 11 },
    { srcImg: Avalanche, title: "Avalanche", subtitle: "AVAX", id: 12 },
    { srcImg: Shiba, title: "Shiba Inu", subtitle: "SHIB", id: 13 },
    { srcImg: Polkadot, title: "Polkadot", subtitle: "DOT", id: 14 },
    { srcImg: Toncoin, title: "Toncoin", subtitle: "TON", id: 151 },
    { srcImg: Tron, title: "Tron", subtitle: "TRX", id: 16 },
    5
  ],
  [
    { srcImg: Bitcoin_cash, title: "Bitcoin Cash", subtitle: "BCH", id: 17 },
    { srcImg: Near, title: "Near", subtitle: "NEAR", id: 18 },
    { srcImg: Uniswap, title: "Uniswap", subtitle: "UNI", id: 19 },
    { srcImg: Litecoin, title: "Litecoin", subtitle: "LTC", id: 20 },
    { srcImg: Aptos, title: "Aptos", subtitle: "APT", id: 21 },
    { srcImg: IMX, title: "Immutable", subtitle: "IMX", id: 22 },
    { srcImg: Cosmos, title: "Cosmos", subtitle: "ATOME", id: 23 },
    { srcImg: Near, title: "Near", subtitle: "NEAR", id: 24 },
    { srcImg: Bitcoin_cash, title: "Bitcoin Cash", subtitle: "BCH", id: 25 },
    0
  ],
  [
    { srcImg: Stellar, title: "Stellar", subtitle: "XLM", id: 26 },
    { srcImg: GRT, title: "The Graph", subtitle: "GRT", id: 27 },
    { srcImg: DAI, title: "Dai", subtitle: "DAI", id: 28 },
    { srcImg: Optimism, title: "Optimism", subtitle: "OP", id: 29 },
    { srcImg: Injective, title: "Injective", subtitle: "INJ", id: 30 },
    { srcImg: Hbar, title: "Hedera", subtitle: "HBAR", id: 311 },
    { srcImg: Render, title: "Render", subtitle: "RNDR", id: 32 },
    { srcImg: Stellar, title: "Stellar", subtitle: "XLM", id: 33 },
    15
  ],
  [
    { srcImg: Stacks, title: "Stacks", subtitle: "STX", id: 34 },
    { srcImg: Pepe, title: "Pepe", subtitle: "PEPE", id: 35 },
    { srcImg: Bittensor, title: "Bittensor", subtitle: "TAO", id: 36 },
    { srcImg: VeChain, title: "VeChain", subtitle: "VET", id: 37 },
    { srcImg: ThorChain, title: "THORChain", subtitle: "RUNE", id: 38 },
    { srcImg: LidoDao, title: "Lido DAO", subtitle: "LDO", id: 39 },
    { srcImg: Celestia, title: "Celestia", subtitle: "TIA", id: 40 },
    { srcImg: Stacks, title: "Stacks", subtitle: "STX", id: 41 },
    1
  ]
];

const investments = [
  {
    title: "Decentralized Security Measures",
    imgSrc: Illustration_4,
    subtitle: "Get started in minutes with our intuitive and friendly experience. No crypto knowledge required.",
  },
  {
    title: "Fortified Access Management",
    imgSrc: Illustration_6,
    subtitle: "Through multi-tiered access controls, we fortify your account against unauthorized access attempts.",
  },
  {
    title: "Secure Backup Solutions",
    imgSrc: Illustration_14,
    subtitle: "We offer secure backups to ensure data and asset protection, even in the event of hardware failure or loss.",
  },
];

const logos = [
  { img: Logo_1, id: "a" },
  { img: Logo_2, id: "b" },
  { img: Logo_3, id: "c" },
  { img: Logo_4, id: "d" },
  { img: Logo_5, id: "e" },
  { img: Logo_6, id: "f" },
  { img: Logo_7, id: "g" },
  { img: Logo_8, id: "h" },
  { img: Logo_9, id: "i" },
  { img: Logo_10, id: "j" },
];

const testimonials = [
  {
    img: Image_1,
    name: "John Anderson",
    account: "@john.anderson",
    content: "CoinUp has completely transformed my crypto experience. With their user-friendly interface and top-notch security features,I feel confident managing my investments.I couldn't be happier with my decision to trust CoinUp with my digital assets.",
    date: "Apr 1, 2024"
  },
  {
    img: Image_2,
    name: "Michael Smith",
    account: "@msmith",
    content: "I've tried several crypto platforms in the past, but none compare to CoinUp. The platform's security measures give me peace of mind knowing that my assets are safe. Plus, the intuitive design makes it easy for me to navigate and execute transactions.",
    date: "Mar 24, 2024"
  },
  {
    img: Image_3,
    name: "Emily Chen",
    account: "@e.chen",
    content: "CoinUp has exceeded all my expectations. Customer support is excellent. Whenever I've had an issue or a question, the support team has been quick to respond and incredibly helpful. CoinUp has made managing my crypto portfolio a breeze.",
    date: "Mar 16, 2024"
  }
];

const questions = [
  {
    question: "Is my personal information safe with CoinUp?",
    response: "Absolutely. At CoinUp, we take the security and privacy of our users' personal information very seriously. We employ advanced encryption techniques to protect your data and adhere to strict security protocols to ensure it remains confidential at all times.",
    id: "first"
  },
  {
    question: "What cryptocurrencies does CoinUp support?",
    response: "CoinUp supports a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many more. You can find a full list of supported cryptocurrencies in your CoinUp account dashboard.",
    id: "second"
  },
  {
    question: "How can I deposit funds into my CoinUp account?",
    response: "To deposit funds into your CoinUp account, simply navigate to the 'Receive' section of your account dashboard and follow the instructions provided. You can deposit funds using various methods, including bank transfers, credit/debit cards, and cryptocurrency transfers.",
    id: "third"
  },
  {
    question: "Can I withdraw my funds from CoinUp at any time?",
    response: 'Yes, you can withdraw your funds from CoinUp at any time. Simply navigate to the "Send" section of your account dashboard, select the desired withdrawal method, and follow the prompts to initiate the withdrawal process. Please note that withdrawal processing times may vary depending on the chosen method.',
    id: "foorth"
  },
  {
    question: "Does CoinUp charge any fees for transactions?",
    response: 'CoinUp may charge fees for certain transactions, such as deposits, withdrawals, and trades. These fees help cover the costs associated with maintaining our platform and providing you with the best possible service. You can find detailed information about our fees in the "Fees" section of your account dashboard.',
    id: "fifth"
  },
  {
    question: "Can I use CoinUp on my mobile device?",
    response: 'Yes, CoinUp is fully compatible with mobile devices. You can access our platform through your mobile browser or download our mobile app from the App Store or Google Play Store. With CoinUp mobile, you can manage your investments and stay connected to the crypto market on the go.',
    id: "sixth"
  },
];

const downoalds = [
  {
    img: Apple,
    title: "Download for IOS",
    content: "Download the CoinUp Wallet Mobile App from the App Store."
  },
  {
    img: Android,
    title: "Download for Android",
    content: "Download the CoinUp Wallet Mobile App from the Google Play."
  },
  {
    img: Chrome,
    title: "Download for Chrome",
    content: "Get the desktop Browser Extension from the Chrome Web Store."
  },
];

const supports = [
  {
    img: Mail,
    title: "General Support",
    content: "Our team is ready to assist you with any inquiries and provide all the information.",
    href: "mailto:jeniahadam@gmail.com?subject=Hello!"
  },
  {
    img: Discord,
    title: "Discord Community",
    content: "Join our lively Discord Community for crypto insights, updates, and support.",
    href: "https://discord.com",

  },
  {
    img: Telegram,
    title: "Telegram Chat",
    content: "Join the chat for lively discussions. Connect with other enthusiasts.",
    href: "https://telegram.org"
  },
];

const footerLinks = [
  {
    type: "without",
    title: "MENU",
    links: [
      { href: "#home", label: "Home" },
      { href: "#features", label: "Features" },
      { href: "#about", label: "About" },
      { href: "#coins", label: "Coins" },
      { href: "#security", label: "Security" },
    ]
  },
  {
    type: "icon",
    title: "DOWNLOAD",
    links: [
      { href: "https://www.apple.com/app-store/", label: "IOS App" },
      { href: "https://play.google.com/store/games?hl=en&gl=US", label: "Android App" },
      { href: "https://chromewebstore.google.com/", label: "Chrome Extension" }
    ]
  },
  {
    type: "icon",
    title: "RESOURCES",
    links: [
      { href: "https://www.google.com", label: "Whitepaper" },
      { href: "https://www.google.com", label: "Developer Portal" },
      { href: "https://www.google.com", label: "CoinUp Foundation" }
    ]
  },
  {
    type: "without",
    title: "SUPPORT",
    links: [
      { href: "mailto:jeniahadam@gmail.com?subject=Hello!", label: "General Support" },
      { href: "https://discord.com", label: "Discord Community" },
      { href: "https://telegram.org", label: "Telegram Chat" }
    ]
  },
];

export {
  marques,
  links,
  linksSmall,
  cards,
  rows,
  abouts,
  cryptocurrencies,
  investments,
  logos,
  testimonials,
  questions,
  downoalds,
  supports,
  footerLinks
};