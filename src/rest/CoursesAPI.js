const dg_courses_endpoint = 'https://64aff992c60b8f941af4fdbe.mockapi.io/courses';

class CoursesAPI {
    get = async () => {
        try {
            const resp = await fetch(dg_courses_endpoint);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('courses not retrieved', e);
        }
    }

    put = async (course) => {
        try {
            const resp = await fetch(`${dg_courses_endpoint}/${course.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            });
            return await resp.json();
        } catch(e) {
            console.log('courses not updated', e);
        }
    }
}

export const coursesAPI = new CoursesAPI();