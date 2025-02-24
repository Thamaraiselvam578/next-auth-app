import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Box sx={{ maxHeight: "100vh", overflowY: "auto" }} className="scrollbar">
            <Navbar />
            {children}
        </Box>
    );
}