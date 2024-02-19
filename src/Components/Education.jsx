import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>

    <div className="container" style={{display:"flex", justifyContent:"center"}}>
        <div className="box">
                <h4>Kaaga Girls&apos; High School</h4>
                <p>Science and Language</p>
                <p>2018-2021</p>
        </div>
        <div className="box">
            <h4> Machakos University</h4> 
                <p> Bachelor of Science in Civil Engineering</p>
                <p> 2022 - 2027</p>
                </div>
    </div>
    </section>
  );
};

export default Education;
