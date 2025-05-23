
export async function FetchInteractiveMarketShieldPlus(raw) {

    var requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
    };
    try {

        const response = await fetch(
            process.env.NEXT_PUBLIC_MARKET_SHIELD_PLUS_INTERACTIVE_API,
            requestOptions
        );
        const data = await response.json();
        if (data["result"] !== "") {
            return data["result"];
        } else {
            console.log(data["error"]);
            return false;
        }
    } catch (error) {
        if (error.name === "AbortError") {
            alert("The request timed out, Please try again");
            window.location.reload();
        }
        else {
            return 0
        }
    }
}