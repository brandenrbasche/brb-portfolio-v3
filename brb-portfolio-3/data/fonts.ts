import { IBM_Plex_Mono, DM_Sans, Anybody, JetBrains_Mono, Space_Grotesk } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

export const dmSans = DM_Sans({
    subsets: ['latin'],
});

export const anybody = Anybody({
    subsets: ['latin'],
});

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin']
});