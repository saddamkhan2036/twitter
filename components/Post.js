import {
  ChartBarIcon,
  ChatAlt2Icon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex  p-3 cursor-pointer border-b ">
      {/* user image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userImg}
        alt="user-img"
      />
      {/* right side */}
      <div className="">
        {/* header */}
        <div className=" flex  items-center justify-between ">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline ">{post.name}</h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>
          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffects w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
        {/* post text */}
        <p className="text-gray-800  text-[15px] sm:text-[16px] mb-2">{post.text}</p>
        {/* post image */}
        <img className="rounded-2xl mr-2 " src={post.img} alt="" />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2 ">
          <ChatAlt2Icon className="h-9  w-9 hoverEffects p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffects p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-9 w-9 hoverEffects p-2 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffects p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffects p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
