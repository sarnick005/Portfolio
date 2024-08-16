import React from "react";
import { motion } from "framer-motion";


const TeamMember = ({ name, role, imageUrl, index }) => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.img
      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
      src={imageUrl}
      alt={`${name} - ${role}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <div className="space-y-2">
      <div className="text-lg leading-6 font-medium space-y-1">
        <h3 className="text-indigo-600">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

const AboutUs = () => {
  const team = [
    {
      name: "Shubhayan Bagchi",
      role: "CSE undergrad",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQEFHOZ7bFrqpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692103718093?e=1729123200&v=beta&t=5tthvOZ1PWTc-nK4_weoPmrKIDtWcRfTV64SFpn1cXE",
    },
    {
      name: "Sarnick Chakraborty",
      role: "CSE undergrad",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQGd8nqtkhYXTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722316313540?e=1729123200&v=beta&t=BGDKGcD7Gk1okDlnUXQpswomkoznodzVrXJT6ULy6EE",
    },
    {
      name: "Subhakash Paul",
      role: "CSE undergrad",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQFU4SQgwCNakQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684912920202?e=1729123200&v=beta&t=HRBZiuTPbVYTfRkAor8pJeMiXBN4CwIE_GCvPaxR1Hk",
    },
  ];

  return (
    <motion.section
      id="about-us"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet the team behind our success
          </p>
        </motion.div>
        <motion.div
          className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
