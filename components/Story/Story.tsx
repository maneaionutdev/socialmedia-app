import { StoryProps } from "../../typescript/components/story.type"

const Story: React.FC<StoryProps> = ({ username, profilePic }) => {
  return (
    <div>
      <img className="h-14 w-14 rounded-full p-Profile
      border-red-500 border-2 object-cover cursor-pointer hover:scale-110 
        transition transform duration-200 ease-out" src={profilePic}
        alt={`${username} profile pic`} />
      <p className="text-xs w-14 truncate text-center">{username}</p>

    </div>
  )
}

export default Story