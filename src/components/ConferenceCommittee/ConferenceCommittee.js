import React from "react";
import "./ConferenceCommittee.scss";
const data = [
  {
    title: "PATRON",
    members: [
      {
        name: "Prof. Baldev Setia",
        designation: "Director",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "CO-PATRON",
    members: [
      {
        name: "Prof. Siby John",
        designation: "Deputy Director",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "GENERAL CHAIR",
    members: [
      {
        name: "Prof. Shailendra Singh",
        designation: "Head of Department (CSE)",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "CONFERENCE-CHAIR",
    members: [
      {
        name: "Prof. T.C. Aseri",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Sanjeev Sofat",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Rajesh Bhatia",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "ORGANIZING-SECRETARY",
    members: [
      {
        name: "Dr. Sandeep Harit",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Padmavati",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "TECHNICAL-PROGRAM-CHAIRS",
    members: [
      {
        name: "Prof. Mayank Gupta",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Manish Kumar",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Amandeep Singh",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "PUBLICATION-CHAIRS",
    members: [
      {
        name: "Dr. Poonam Sain",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Sachin Chaudhary",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "PUBLICITY-CHAIRS",
    members: [
      {
        name: "Prof. Rajesh Bhatia",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Rupali Syal",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "FINANCE-CHAIRS",
    members: [
      {
        name: "Prof. Sudesh Rani",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Manish Kumar",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "WORKSHOP-CHAIRS",
    members: [
      {
        name: "Prof. Sanjeev Sofat",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Alka Jindal",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "HOSPITALITY-AND-LOGISTIC-CHAIRS",
    members: [
      {
        name: "Prof. T.C. Aseri",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Amandeep Kaur",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Dr. Aruna Kumar Pundir",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
  {
    title: "WEB-MANAGEMENT-CHAIRS",
    members: [
      {
        name: "Prof. Shilpa",
        designation: "",
        image: "",
        details: "",
      },
      {
        name: "Prof. Mamta",
        designation: "",
        image: "",
        details: "",
      },
    ],
  },
];

const data2 = {
  title: "NATIONAL-ADVISORY-BOARD",
  members: [
    {
      name: "Prof. Baldev Setia",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rajeev Ahuja",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Ajit Kumar Chaturvedi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Pushpak Bhattacharyya",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Prem Kalra",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rajeev Tripati",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Lalit Kumar Awasthi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. B.D. Chaudhary",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Jai Prakash Saini",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Yogesh Singh",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. P. K. Khosla",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Dr. Satish Kumar",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Mayank Dave",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Neeraj Tyagi",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Er. Prateek Kishore",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Chiranjeev Kumar",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Rama Krishna Challa",
      designation: "",
      image: "",
      details: "",
    },
    {
      name: "Prof. Subramaniam Anantha Ramakrishna",
      designation: "",
      image: "",
      details: "",
    },
  ],
};

const ConferenceCommittee = () => {
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {data.map((items, i) => {
          return (
            <div key={i} className="accordion-item">
              <h2
                className="accordion-header"
                id={`panelsStayOpen-heading${data.id}`}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsStayOpen-collapse${data.id}`}
                  aria-expanded="false"
                  aria-controls={`panelsStayOpen-collapse${data.id}`}
                >
                  {items.title}
                </button>
              </h2>
              <div
                id={`panelsStayOpen-collapse${data.title}`}
                className="accordion-collapse collapse"
                aria-labelledby={`panelsStayOpen-heading${data.title}`}
              >
                <div className="accordion-body ConferenceComittee__grid">
                  {items.members.map((member, i) => {
                    return (
                      <div
                        key={i}
                        className="card ConferenceComittee__card accordion-button collapsed"
                        style={{ width: "18rem" }}
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${member.name}`}
                        aria-expanded="false"
                        aria-controls={`panelsStayOpen-collapse${member.name}`}
                      >
                        <img
                          className="card-img-top"
                          src="data:image/jpeg;base64,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"
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{member.name}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ConferenceCommittee__advisory">
        <h4 className="ConferenceCommittee__advisoryheading">{data2.title}</h4>
        <div className="ConferenceCommittee__items">
          {data2.members.map((items, i) => {
            return (
              <div key={i} className="ConferenceCommittee__item">
                <h5>{items.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ConferenceCommittee;
