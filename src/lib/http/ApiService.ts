import { AxiosError } from "axios";
import axiosService from "./AxiosService"
import { ResumeData } from "@/store/resumeTypes";

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
}
export interface ResumeListData {
    content: ResumeData[];
}
type ApiResult<T> = [ApiResponse<T>, null] | [null, AxiosError];

class ApiService {

    async parsePdf(file: File): Promise<ApiResult<ResumeData>> {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const { data } = await axiosService.post<ApiResponse<ResumeData>>("/resumes/parse-pdf", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            return [data, null]
        } catch (error) {
            return [null, error as AxiosError];
        }
    }

    async createNewResume(requestBody: ResumeData): Promise<ApiResult<ResumeData>> {
        try {
            const { data } = await axiosService.post<ApiResponse<ResumeData>>("/resumes", requestBody);
            return [data, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }

    async getResumeById(id: string): Promise<ApiResult<ResumeData>> {
        try {
            const { data } = await axiosService.get<ApiResponse<ResumeData>>(`/resumes/${id}`);
            return [data, null]
        } catch (error) {
            return [null, error as AxiosError];
        }
    }

    async updateResume(id: string, requestBody: ResumeData): Promise<ApiResult<ResumeData>> {
        try {
            const { data } = await axiosService.put<ApiResponse<ResumeData>>(`/resumes/${id}`, requestBody);
            return [data, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }

    async getAllResumes(): Promise<ApiResult<ResumeListData>> {
        try {
            const { data } = await axiosService.get<ApiResponse<ResumeListData>>('/resumes?page=0&size=10&sortBy=createdAt&sortDir=DESC');
            return [data, null];
        } catch (error) {
            return [null, error as AxiosError];
        }
    }
}

export const apiService = new ApiService();
export default apiService;