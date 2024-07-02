import { IBM_Plex_Mono, Libre_Baskerville, DM_Sans } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

export const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['500']
});