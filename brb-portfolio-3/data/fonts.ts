import { IBM_Plex_Mono, Libre_Baskerville, DM_Sans, Anybody, JetBrains_Mono } from "next/font/google";

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

export const anybody = Anybody({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
});

