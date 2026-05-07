// Relationship patterns
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        console.log("Connected to MongoDB");

        // One-to-many (Embedding)
        const blogSchema = new mongoose.Schema({
            title: String,
            comments: [{ text: String }]
        });

        const Blog = mongoose.model('Blog', blogSchema);
        await Blog.deleteMany();

        await Blog.create({
            title: "Mongoose basics",
            comments: [
                { text: "Great article" },
                { text: "Helpful article" }
            ]
        });

        console.log("Embedding:");
        console.log(await Blog.find());

        // One-to-many (Referencing)
        const postSchema = new mongoose.Schema({
            title: String
        });

        const commentSchema = new mongoose.Schema({
            text: String,
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        });

        const Post = mongoose.model('Post', postSchema);
        const Comment = mongoose.model('Comment', commentSchema);

        await Post.deleteMany();
        await Comment.deleteMany();

        const post = await Post.create({ title: "NodeJS Basics" });

        await Comment.create([
            { text: "Nice post!", post: post._id },
            { text: "Good", post: post._id }
        ]);

        // Many-to-many
        const studentSchema = new mongoose.Schema({
            name: String,
            courses: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course'
                }
            ]
        });

        const courseSchema = new mongoose.Schema({
            title: String,
            students: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Student'
                }
            ]
        });

        const Student = mongoose.model('Student', studentSchema);
        const Course = mongoose.model('Course', courseSchema);

        await Student.deleteMany();
        await Course.deleteMany();

        const course1 = await Course.create({ title: "MongoDB" });
        const course2 = await Course.create({ title: "Node.js" });

        const student1 = await Student.create({
            name: "Raj",
            courses: [course1._id, course2._id]
        });

        const student2 = await Student.create({
            name: "Samson",
            courses: [course2._id]
        });

        // ✅ Correct mapping
        course1.students.push(student1._id);
        course2.students.push(student1._id, student2._id);

        await course1.save();
        await course2.save();

        console.log("Many-to-many:");

        console.log("Students with courses:");
        console.log(await Student.find().populate('courses'));

        console.log("Courses with students:");
        console.log(await Course.find().populate('students'));

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("DB disconnected");
    }
}

main();