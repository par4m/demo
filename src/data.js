// images
import Logo from "../src/assets/img/header/logo.svg";
import ResistanceImg from "../src/assets/img/workouts/resistance.png";
import BoxingImg from "../src/assets/img/workouts/boxing.png";
import BodyPumpImg from "../src/assets/img/workouts/body-pump.png";
import YogaImg from "../src/assets/img/workouts/yoga.png";
import FullBodyImg from "../src/assets/img/workouts/full-body.png";
import FitnessImg from "../src/assets/img/workouts/fitness.png";
import BattleRopeImg from "../src/assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
import JoinImg from "../src/assets/img/join/woman.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import CalendarIcn from "../src/assets/img/workouts/icons/calendar.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Community", href: "/" },
  { name: "FAQ", href: "/" },
];

export const banner = {
  titlePart1: "Fitness, redefined by intelligence.",
  titlePart2: "- you fit here",
  subtitle:
    "We deliver serious results with AI-driven fitness, all in a fun, friendly way.",
  textBtn: "Join Now",
  img: "",
};

export const about = {
  icon: UsersIcn,
  title: "Our misson",
  subtitle1:
    "We are driven by innovation, combining advanced AI technology with personalized fitness to empower every individual. Our app provides a motivating, data-driven environment, offering custom-tailored workouts and expert guidance to help you achieve your fitness goals.",
  subtitle2:
    "The strength of our heart-felt identity is utilized to inspire every person that steps foot into our platform to better themselves.",
  link: "Join Now",
};

export const workouts = {
  icon: CalendarIcn,
  title: "Training programs",
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited app access" },
        { name: "choose from our pre made programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited app access" },
        { name: "5 custom  programs" },
        { name: "free fitness consultation" },
        { name: "personal AI trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited app access" },
        { name: "custom training programs" },
        { name: "free fitness consultation" },
        { name: "personal AI trainer" },
        { name: "calorie tracking" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“MindMuscleAI completely changed the way I approach fitness. The AI customizes workouts just for me, and I’m seeing results faster than ever!”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“This app has been a game-changer for me. As a busy mom, the personalized plans fit my schedule, and I’m feeling stronger both mentally and physically.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“The AI-guided workouts are amazing! It’s like having a personal trainer right in my pocket, always pushing me to reach my goals.”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“MindMuscleAI is exactly what I needed. The app keeps me motivated, and the AI adapts my routine as I progress, making each workout fresh and effective.”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "You can book a workout session directly through the MindMuscleAI app by selecting your preferred class from the 'Workouts' section.",
    },
    {
      question: "Can I pay by cash for my membership?",
      answer:
        "All payments for MindMuscleAI memberships are handled securely through the app via credit card or digital payment options. Cash payments are not accepted.",
    },
    {
      question: "What age do I need to be to use MindMuscleAI?",
      answer:
        "MindMuscleAI is designed for users 16 years and older. Anyone under 18 should have parental consent before signing up.",
    },
    {
      question: "Are there any exclusive perks for premium users?",
      answer:
        "Yes, premium and elite users get access to personalized AI trainers, more workout programs, and exclusive offers on recovery drinks and more.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime through the 'Account Settings' in the MindMuscleAI app. Your membership will remain active until the end of your billing cycle.",
    },
    {
      question: "Does the app track my progress?",
      answer:
        "Yes! MindMuscleAI tracks your workout performance, progress, and improvements, helping you stay motivated and achieve your goals efficiently.",
    },
  ],
};
export const join = {
  image: JoinImg,
  title: "Wanna join & have fun?",
  subtitle:
    "We’ll keep you updated on the things you need to know about MindMuscleAI. Nothing more, nothing less.",
  btnText: "Join now",
};

export const footer = {
  logo: Logo,
  copyrightText: "All rights reserved. MindMuscleAI 2024.",
};

