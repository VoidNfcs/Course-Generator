import { UserInputContext } from "@/app/_context/UserInputContext";
import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const SelectOption = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        {/* Option 1 */}
        <div>
          <label className="text-sm">🎓Difficulty Level</label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Option 2 */}
        <div>
          <label className="text-sm">⏱Course Duration</label>
          <Select
            defaultValue={userCourseInput?.duration}
            onValueChange={(value) => handleInputChange("duration", value)}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hours</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Option 3 */}
        <div>
          <label className="text-sm">🎥Add Video</label>
          <Select
            defaultValue={userCourseInput?.displayVideo}
            onValueChange={(value) => handleInputChange("displayVideo", value)}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Option 4 */}
        <div>
          <label className="text-sm">📖No of Chapters</label>
          <Input
            type={"number"}
            defaultValue={userCourseInput?.noOfChapters}
            placeholder={'ex: 5'}
            onChange={(e) => handleInputChange("noOfChapters", e.target.value)}
          />
        </div>

        {/* Close */}
      </div>
    </div>
  );
};

export default SelectOption;
