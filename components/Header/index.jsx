import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="flex-direction column">
      <div className="karma">
        <motion.div
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
          className="text-8xl text-purple-500 items-center"
        >
          BAD KARMA
        </motion.div>
      </div>
      </div>
    </header>
  );
};

export default Header;
