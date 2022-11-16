import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Input from "./Input";
import Post from "./Post";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg  sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className=" flex items-center justify-center px-0 ml-auto ">
        {session ? (
          
          <button
            onClick={signOut}
            className="px-4 py-1.5 bg-blue-400 font-bold text-white rounded-full  shadow-md hover:brightness-95  "
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={signIn}
            className="px-4 py-1.5 bg-blue-400 font-bold text-white rounded-full  shadow-md hover:brightness-95  "
          >
            Sign In
          </button>
        )}
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
