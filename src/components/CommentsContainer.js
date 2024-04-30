import React from "react";
// import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsdata = [
  {
    id: 1,
    name: "User1",
    text: "Comment at level 1",
    replies: [
      {
        id: 2,
        name: "User2",
        text: "Comment at level 2",
        replies: [
          {
            id: 3,
            name: "User3",
            text: "Comment at level 3",
            replies: [
              {
                id: 4,
                name: "User4",
                text: "Comment at level 4",
                replies: [
                  {
                    id: 5,
                    name: "User5",
                    text: "Comment at level 5",
                    replies: [
                      {
                        id: 6,
                        name: "User6",
                        text: "Comment at level 6",
                        replies: [
                          {
                            id: 7,
                            name: "User7",
                            text: "Comment at level 7",
                            replies: [
                              {
                                id: 8,
                                name: "User8",
                                text: "Comment at level 8",
                                replies: [
                                  {
                                    id: 9,
                                    name: "User9",
                                    text: "Comment at level 9",
                                    replies: [
                                      {
                                        id: 10,
                                        name: "User10",
                                        text: "Comment at level 10",
                                        replies: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "User11",
    text: "Comment at level 1",
    replies: [
      {
        id: 12,
        name: "User12",
        text: "Comment at level 2",
        replies: [
          {
            id: 13,
            name: "User13",
            text: "Comment at level 3",
            replies: [
              {
                id: 14,
                name: "User14",
                text: "Comment at level 4",
                replies: [
                  {
                    id: 15,
                    name: "User15",
                    text: "Comment at level 5",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "User16",
    text: "Comment at level 1",
    replies: [
      {
        id: 17,
        name: "User17",
        text: "Comment at level 2",
        replies: [
          {
            id: 18,
            name: "User18",
            text: "Comment at level 3",
            replies: [
              {
                id: 19,
                name: "User19",
                text: "Comment at level 4",
                replies: [
                  {
                    id: 20,
                    name: "User20",
                    text: "Comment at level 5",
                    replies: [
                      {
                        id: 21,
                        name: "User21",
                        text: "Comment at level 6",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-xl">Comments:</h1>
      {/* <Comment data={comments[0]} /> */}
      <CommentsList comments={commentsdata} />
    </div>
  );
};

export default CommentsContainer;
