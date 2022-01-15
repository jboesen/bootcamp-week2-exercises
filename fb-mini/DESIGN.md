List the tables, their associated columns, and the data type that will be stored in each column (string, number, boolean, enum, date, etc.)
- Users
Users should have the first name, last name, username, hashed password, bio, email, and DoB all as strings, and id as an int
- Posts
Posts would be joined to users based on userid. It would also have the post's id, the time of the post (as a datetime object), the text of the post (string), and the number of likes of the post
- Friends
Friends would be a table showing a friend pair, implemented as userids--the requestor and the requested. These will be ints joined to users. We will also have isAccepted as a boolean and a date as a string. 
- Likes
The likes table would reference the post id and and a liker id