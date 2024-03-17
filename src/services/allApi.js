import {commonAPI} from './commonApi'
import {BASE_URL} from './baseUrl'


// 1)Admin Login

export const loginAdminApi = async(admin)=>{
    return await commonAPI("post",`${BASE_URL}/admin/login`,admin)
}


//2) Register Student

export const createStudentApi = async(student)=>{
    return await commonAPI("post",`${BASE_URL}/student/createstudent`,student)
}

// 3)List All Student

export const listStudentApi = async()=>{
    return await commonAPI("get",`${BASE_URL}/student/liststudent`,'')
}

// 4)Add marks

export const addMarksApi = async(markdata)=>{
    return await commonAPI("post",`${BASE_URL}/marks/addmarks`,markdata)
}

// 5) Get marks

export const getMarksApi = async(regno,batch)=>{
    return await commonAPI("get",`${BASE_URL}/marks/getmarks/${regno}/${batch}`)
}

//6) delete student

export const deleteStudentApi = async(regno)=>{
    return await commonAPI("delete",`${BASE_URL}/student/deletestudent/${regno}`)
}




