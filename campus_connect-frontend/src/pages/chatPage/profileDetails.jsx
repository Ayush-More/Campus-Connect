import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMentorDetail } from "../../service/chats/chats";

function ProfileDetail() {
  const [mentorDetail, setMentorDetail] = useState(null);
  const { mentor_id } = useParams();
  const LightTheme = useSelector((state) => state.themeKey);

  console.log("Mentor ID from Params:", mentor_id);

  const handleDetails = async () => {
    try {
      const detail = await fetchMentorDetail(mentor_id);
      console.log("Fetched Mentor Details:", detail);
      setMentorDetail(detail?.data?.mentorDetail || {});
    } catch (error) {
      console.error("Error fetching mentor details:", error);
    }
  };

  useEffect(() => {
    if (mentor_id) {
      handleDetails();
    }
  }, [mentor_id]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className={`chatArea-container ${LightTheme ? "" : "con-dark"}`}
      >
        <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <p className="con-icon">{mentorDetail?.users?.name?.[0] || "A"}</p>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            {mentorDetail?.users?.name || "Ayush More"}
          </p>
        </div>
        <div className={`chatArea-messages ${LightTheme ? "" : "dark"}`}>
          {mentorDetail ? (
            <div className="mentor-details">
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  Email
                </strong>{" "}
                {mentorDetail?.users?.email || "N/A"}
              </p>
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  Role
                </strong>{" "}
                {mentorDetail?.role || "N/A"}
              </p>
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  Industry Experience
                </strong>
                {mentorDetail?.industryExperience || "N/A"} years
              </p>
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  CGPA
                </strong>{" "}
                {mentorDetail?.Cgpa || "N/A"}
              </p>
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  Club Position
                </strong>{" "}
                {mentorDetail?.ClubWithPosition || "N/A"}
              </p>
              <p
                className={` ${LightTheme ? "" : "dark"}`}
                style={{ margin: "30px 0px" }}
              >
                <strong
                  className={`profile-detail ${LightTheme ? "" : "opp-dark"}`}
                >
                  Programming Languages
                </strong>
                {mentorDetail?.programmingLanguages?.join(", ") || "N/A"}
              </p>
            </div>
          ) : (
            <p>Loading mentor details...</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProfileDetail;
