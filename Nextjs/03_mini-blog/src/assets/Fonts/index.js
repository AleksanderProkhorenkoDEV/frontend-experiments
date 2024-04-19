import { Montserrat } from 'next/font/google'

/**
 * 
 *  TIPOGRAFIAS BASE DE LA APP
 * 
 */
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200'],
    variable: '--font-monserratLight',
    style: ['normal']
})

/**
 * 
 *  TIPOGRAFIAS VARIADAS DE LA APP
 * 
 */
export const montserratRegular = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-monserratRegular',
    style: ['normal']
})