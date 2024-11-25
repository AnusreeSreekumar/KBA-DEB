import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import coursesData from '../data/courses.json'
import MainLayout from '../layouts/MainLayout'

const DeleteCourse = () => {

    const { id } = useParams();
    console.log("selected course for deletion: ", id);

    const existingCourse = coursesData.find((course) => course.courseId === id)
    console.log("Existing Course: ",existingCourse);

    if (existingCourse) {

        const deletedCourse = coursesData.splice(coursesData.courseId)
        console.log(deletedCourse);
        
        return (
            <MainLayout>
                <h1 className='text-3xl text-purple-800 text-center font-semibold mt-6'>The selected Course is deleted</h1>
            </MainLayout>
        )
    }
}

export default DeleteCourse
