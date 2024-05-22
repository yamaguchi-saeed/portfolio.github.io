import "./hero.scss"
//import ScrollImage from "./Scroll.png";
//import ProfileImage from "./Profile.png";
import { motion } from "framer-motion";

const textVariants = {
    inital: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
        },
    }
};


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>MIKAHEELYAMAGUCHI SAEED</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer, Web developer and UI/UX Designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    {/* <img src={ScrollImage} alt="scroll" /> */}
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll down" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                {/* <img src={ProfileImage} alt="profile image" /> */}
                <img src="/profile.png" alt="profile" />
            </div>
        </div>
    )
}

export default Hero