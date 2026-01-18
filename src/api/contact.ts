import { apiClient } from '@/lib/api-client';
import type { ContactFormData, ApiResponse } from '@/types';

export const contactApi = {
  submitContactForm: async (
    data: ContactFormData
  ): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post('/api/contact', data);
  },

  subscribeNewsletter: async (
    email: string
  ): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post('/api/newsletter/subscribe', { email });
  },
};
