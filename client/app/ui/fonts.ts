import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const poppins = Poppins({weight: ["300","400","500","600","700"], subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] });