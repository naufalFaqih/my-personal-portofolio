import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './world-wide-web.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profil_naufal from './profil_naufal.png';
import profile_user from './profile_user.jpeg';
import logo_black from './logo-black.png';
import logo_white from './logo-white.png';
import laravel from './Laravel-Logo.jpeg';
import mysql from './logo-mysql.png';
import python from './python-logo.png';
import github from './github-logo.svg';
import postman from './postman-logo.png';
import ml from './deep-learning.png';
import dataprocessing from './statistical.png';
import nlp from './nlp.png';

export const assets = {
  logo_black,
  logo_white,
  profile_user,
  profil_naufal,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  laravel,
  mysql,
  python,
  github,
  postman,
  ml,
  dataprocessing,
  nlp,
};

export const workData = [
  {
    slug: 'arabic-verb-conjugator',
    title: 'ArabicMorph: Arabic Verb Conjugator',
    description: 'Laravel Web Application',
    category: 'Web Development',
    bgImage: '/my-personal-portofolio/arabicmorph.png',
    documentationImages: ['/my-personal-portofolio/aramorph-1.png', '/my-personal-portofolio/aramorph-2.png', '/my-personal-portofolio/aramorph-3.png'],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Livewire'],
    longDescription:
      'ArabicMorph: Arabic Verb Conjugator is a Laravel-based web application designed to help users explore Arabic verb conjugation in a clearer and more structured way. The system provides a practical lookup experience where users can input Arabic verbs and view organized conjugation results through a responsive interface. This project focuses on building a maintainable web application using Laravel, Blade, Livewire, and MySQL, while improving the flow between user input, data processing, and result presentation for Arabic morphology learning.',
  },
  {
    slug: 'jamid-musytaq-classification',
    title: 'Jamid & Musytaq Classification',
    description: 'Machine Learning Project',
    category: 'Machine Learning',
    bgImage: '/my-personal-portofolio/jamid-musytaq.png',
    documentationImages: ['/my-personal-portofolio/jamus-1.png', '/my-personal-portofolio/jamus-2.png', '/my-personal-portofolio/jamus-3.png', '/my-personal-portofolio/jamus-4.png'],
    techStack: ['Python', 'Deep Learning', 'Text Processing', 'Flask', 'NLP-Arabic'],
    longDescription:
      'Jamid & Musytaq Classification is a machine learning project focused on classifying Arabic words into Jamid and Musytaq categories. The project involves a complete machine learning workflow, including text preprocessing, feature preparation, model training, and performance evaluation. Through this project, I explored how deep learning and text processing techniques can be applied to Arabic linguistic data to support more consistent analysis of word patterns. The project also emphasizes evaluation using classification metrics to understand model performance and improve decision-making based on experimental results.',
  },
  {
    slug: 'clustering-web-app',
    title: 'Clustering Web App',
    description: 'Machine Learning & Flask',
    category: 'Data Processing',
    bgImage: '/my-personal-portofolio/ketimpangan.png',
    documentationImages: ['/my-personal-portofolio/ketimpangan-2.png', '/my-personal-portofolio/ketimpangan-3.png', '/my-personal-portofolio/ketimpangan-4.png'],
    techStack: ['Python', 'Flask', 'Clustering', 'Data Visualization', 'scikit-learn', 'pandas', 'leaflet'],
    longDescription:
      'Clustering Web App is a Flask-based machine learning application designed to process data, identify grouping patterns, and present clustering results in a more understandable form. The project applies clustering techniques to support data exploration and interpretation through visual outputs. It emphasizes a practical workflow from data preparation, clustering process, and result visualization, making the analysis easier to understand for users. Through this project, I practiced data processing, unsupervised learning, web integration, and data visualization using Python and Flask.',
  },
];

export const serviceData = [
  {
    icon: assets.ml,
    title: 'Machine Learning',
    description: 'I develop machine learning models for data classification, text processing, and model performance analysis using Python, TensorFlow, and scikit-learn.',
    link: 'https://github.com/naufalFaqih/landcover-RF-classification',
  },
  {
    icon: assets.web_icon,
    title: 'Web Development',
    description: 'I build structured, responsive, and user-friendly web applications using technologies like Laravel, PHP, JavaScript, and MySQL databases.',
    link: 'https://github.com/naufalFaqih/laravel-arabic-verb-conjugator',
  },
  {
    icon: assets.dataprocessing,
    title: 'Data Processing',
    description: 'I am accustomed to data preprocessing, feature engineering, result visualization, and model evaluation to generate more understandable insights.',
    link: 'https://github.com/naufalFaqih/submission-bike-analysis',
  },
  {
    icon: assets.nlp,
    title: 'AI & NLP Integration',
    description: 'I am interested in integrating AI and Natural Language Processing for mobile applications, particularly for Arabic language learning and text classification solutions.',
    link: 'https://github.com/naufalFaqih/Capstone-Project-ArabicMorph',
  },
];

export const infoList = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'Python, Flask, TensorFlow, Pandas, Scikit-learn, Laravel, MySQL' },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Systems' },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' },
];

export const toolsData = [assets.vscode, assets.git, assets.github, assets.laravel, assets.mysql, assets.python, assets.postman];
