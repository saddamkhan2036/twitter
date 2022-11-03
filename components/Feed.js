import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Saddam Khan",
      username: "yousafzai2036",
      userImg:
        "https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
      img: "https://images.unsplash.com/photo-1665963112133-011965f045d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture.",
      timestamp: " 2 hours ago",
    },
    {
      id: "2",
      name: "Saddam Khan",
      username: "yousafzai2036",
      userImg:
        "https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
      img: "https://images.unsplash.com/photo-1666679643373-f2e184deefce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Through the use of unlikely textures, intriguing subject matter, and new formats — photography has the power to challenge our perspectives and push creativity forward",
      timestamp: " 4 hours ago",
    },
    {
      id: "3",
      name: "Saddam Khan",
      username: "yousafzai2036",
      userImg:
        "https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
      img: "https://images.unsplash.com/photo-1663614169496-a379baee8795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      text: "Covering the latest important events, news-worthy moments and movements from around the world — from political protests to cultural celebrations. When submitting, please provide a photo description so we understand the full context of the image",
      timestamp: " 6 hours ago",
    },
    {
      id: "3",
      name: "Saddam Khan",
      username: "yousafzai2036",
      userImg:
        "https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
      img: "https://images.unsplash.com/photo-1661366051048-363961b03c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Reflecting the realities of the modern workplace in their many forms — from images of remote working and start-ups to shots of engineers and artists at work",
      timestamp: " 10 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg  sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className=" hoverEffects flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post,id) => (
        <Post key={id} post={post} />
      ))}
    </div>
  );
}
