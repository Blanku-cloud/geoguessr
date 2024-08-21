import LandingTextImage from "./LandingTextImage";
import earth from "../assets/earth.png";
import people from "../assets/people.png";
import trophy from "../assets/trophy.png";
import competition from "../assets/compition.png";
import wc from "../assets/wc.png";
import QestionDropdown from "./QuestionDropdown";
import BlackWhiteButton from "./BlackWhiteButton";
import { Link } from "react-router-dom";
import React from "react";
import GreenButton from "./GreenButton";

const emoteData: {
  title: string;
  text: string;
  src: string;
  index: number;
  border: boolean;
  button?: React.ReactNode;
}[] = [
  {
    title: "Explore the world",
    text: "Get dropped anywhere from the busy streets of New York to the beautiful beaches of Bali.",
    src: earth,
    index: 1,
    border: true,
  },
  {
    title: "Play with Friends",
    text: "Put your skills to the test against your friends and family. Create your own private party and play together.",
    src: people,
    index: 2,
    border: true,
  },
  {
    title: "Compete against others",
    text: "Test your ability against players all across the world. Earn badges and compete against others in tournaments and events!",
    src: trophy,
    index: 3,
    border: true,
  },
  {
    title: "GeoGuessr for organizations",
    text: "Looking to play GeoGuessr together with friends, co-workers or in another context? With a GeoGuessr Pro subscription, you can invite people without subscriptions to play with you in a party or challenge.",
    src: competition,
    index: 4,
    border: true,
    button: (
      <BlackWhiteButton>
        <Link to="/" className="uppercase">
          Read More
        </Link>
      </BlackWhiteButton>
    ),
  },
  {
    title: "World Cup 2024",
    text: "The GeoGuessr World Cup 2024 is gearing up. Follow players from all around the world as they compete to become the World Champion and a $100,000 prize pool.",
    src: wc,
    index: 5,
    border: false,
    button: (
      <BlackWhiteButton>
        <Link to="/" className="uppercase">
          Read More
        </Link>
      </BlackWhiteButton>
    ),
  },
];

const dropdownData: {
  title: string;
  text: string;
  button?: React.ReactNode;
}[] = [
  {
    title: "What is GeoGuessr?",
    text: "GeoGuessr is a geography game, in which you are dropped somewhere in the world in a street view panorama and your mission is to find clues and guess your location on the world map.",
  },
  {
    title: "I have trouble accessing my account.",
    text: `If you've forgot your password, click on "Already have an account?" in the upper right corner, and then on "Forgot your password?". Enter the email address which is connected to your account, and we'll send you an email with a link to reset your password! Don't forget to check you spam email if it may have gotten caught there. If you are not receiving an email you might have enabled Google/Facebook login. If so, send an email to info@geoguessr.com and we will help you further. If you've forgotten which email you signed up with, no worries! Contact us at info@geoguessr.com and we'll help you out!`,
  },
  {
    title: "Is GeoGuessr available on App Store and Google Play?",
    text: "Yes, GeoGuessr is available as apps on both iOS and Android, and your account gives you access to play in our apps as well.",
  },
  {
    title: "What is Seterra?",
    text: "Become a geography expert and have fun at the same time! Seterra is an entertaining and educational geography game that gives you access to over 400 customizable quizzes. Seterra will challenge you with quizzes about countries, capitals, flags, oceans, lakes and more!",
    button: (
      <GreenButton
        className=""
        paddingX="px-5"
        paddingY="py-1"
        fontSize="text-base"
      >
        <Link to="/" className="uppercase">
          Play now
        </Link>
      </GreenButton>
    ),
  },
];

export default function LandingBody() {
  return (
    <div className="relative z-0 bg-landing-main w-full landing-main-shadow min-h-[130rem] flex items-center flex-col font-titilliumWeb pb-28">
      <div>
        {emoteData.map((data, index) => (
          <LandingTextImage
            title={data.title}
            text={data.text}
            src={data.src}
            index={data.index}
            border={data.border}
            button={data.button}
            key={index}
          />
        ))}
      </div>
      <div className="text-white mt-20">
        <div className="flex items-center">
          <p className="w-80">FREQUENTLY ASKED QUESTIONS</p>
          <hr className="border-t border-gray-300 w-full" />
        </div>

        {dropdownData.map((data, index) => (
          <QestionDropdown
            title={data.title}
            text={data.text}
            button={data.button}
            key={index}
          />
        ))}
      </div>
      <div>
        {" "}
        <h3 className="text-white text-2xl mt-16">
          This is a clone of Geoguessr made for fun. This is not the real
          Geoguessr.
        </h3>
      </div>
    </div>
  );
}
