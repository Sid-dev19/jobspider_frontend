import { serverURL } from "../../services/FetchNodeServices";
import { Paper } from "@mui/material";

export default function RecentUpdateComponent({ item }) {
    return (

        <div style={{ padding: "0 10px" }}>
            <Paper
                elevation={2}
                style={{
                    borderRadius: "90px",
                    display: "flex",
                    width: 280,
                    height: 80,
                    backgroundColor: "#fff"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: 280,
                        height: 80,
                        backgroundColor: "#fff",
                        borderRadius: "90px",
                        alignItems: "center"
                    }}
                >
                    {/* IMAGE */}
                    <div style={{ marginLeft: 6 }}>
                        <img
                            src={`${serverURL}/images/${item.userimage}`}
                            alt=""
                            style={{
                                width: 60,
                                height: 60,
                                padding: "8px",
                                borderRadius: "50%"
                            }}
                        />
                    </div>

                    {/* TEXT */}
                    {/* TEXT */}
                    <div
                        style={{
                            marginLeft: 10,
                            marginRight: 16,
                            fontFamily: "Ubuntu",
                            fontWeight: "bold",
                            fontSize: 14,
                            lineHeight: "1.4",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,      // ✅ 2 lines
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {item.message}
                    </div>

                </div>
            </Paper>
        </div>
    );
}
