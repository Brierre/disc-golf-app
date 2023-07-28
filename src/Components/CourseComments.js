function CourseComments({ courseComment }) {
    console.log('courseComment:', courseComment);

    return (
        <div className="comment">
            <p>
                {courseComment.comment} ~
                <span className="mt-1 fw-lighter fst-italic">
                    {courseComment.author}
                </span>
            </p>
        </div>
    );
}

export default CourseComments;