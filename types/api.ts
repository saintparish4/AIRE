export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
    error?: string[];
}

export interface ApiError {
    code: string;
    message: string;
    field?: string; 
}

export interface PaginatedResponse<T = any> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number; 
    };
}

