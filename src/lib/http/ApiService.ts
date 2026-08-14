import { AxiosError } from "axios";
import axiosService from "./AxiosService"
import { ParsePdfResponse } from "@/types/resume";

type ApiResult<T> = [T, null] | [null, AxiosError];

class ApiService {

    async parsePdf(file: File): Promise<ApiResult<ParsePdfResponse>> {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const { data } = await axiosService.post<ParsePdfResponse>("/resumes/parse-pdf", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            return [data, null]
        } catch (error) {
            return [null, error as AxiosError];
        }
    }

}

export const apiService = new ApiService();
export default apiService;