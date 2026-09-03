// ======================================
// BIS SMARTGUIDE AI
// PROTOTYPE DATASET
// ======================================

const bisDataset = [
    {
        product: "LED Light",
        category: "Electrical Product",
        status: "Verification Required",
        guidance:
            "Check the applicable product standard and current certification requirements through official BIS sources."
    },

    {
        product: "Electric Iron",
        category: "Electrical Appliance",
        status: "Verification Required",
        guidance:
            "Identify the exact product specifications and verify applicable standards and conformity requirements."
    },

    {
        product: "Pressure Cooker",
        category: "Kitchen Appliance",
        status: "Verification Required",
        guidance:
            "Check the current BIS requirements applicable to the specific pressure cooker category."
    },

    {
        product: "Water Bottle",
        category: "Consumer Product",
        status: "Product Dependent",
        guidance:
            "Requirements may depend on material, intended use and applicable regulations."
    },

    {
        product: "Cement",
        category: "Construction Material",
        status: "Verification Required",
        guidance:
            "Identify the exact type and grade of cement and verify the applicable Indian Standard and certification requirements."
    },

    {
        product: "Ceiling Fan",
        category: "Electrical Appliance",
        status: "Verification Required",
        guidance:
            "Verify the applicable Indian Standard and current conformity requirements for the specific ceiling fan."
    },

    {
        product: "Mobile Charger",
        category: "Electrical / Electronic Product",
        status: "Verification Required",
        guidance:
            "Check the applicable product standard, safety requirements and current BIS conformity requirements."
    }
];


// ======================================
// ADD MESSAGE TO CHAT
// ======================================

function addMessage(containerId, text, className) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Chat container not found:", containerId);
        return;
    }

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        className
    );

    messageDiv.innerHTML =
        text.replace(/\n/g, "<br>");

    container.appendChild(messageDiv);

    container.scrollTop =
        container.scrollHeight;
}


// ======================================
// CONSUMER CHATBOT
// ======================================

function sendConsumerMessage() {

    const input =
        document.getElementById("consumerInput");

    if (!input) {
        console.error("consumerInput not found");
        return;
    }

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(
        "consumerMessages",
        message,
        "user-message"
    );

    input.value = "";

    setTimeout(function () {

        const response =
            generateConsumerResponse(message);

        addMessage(
            "consumerMessages",
            response,
            "ai-message"
        );

    }, 500);
}


// ======================================
// CONSUMER AI RESPONSE
// ======================================

function generateConsumerResponse(question) {

    const q =
        question.toLowerCase();


    // Greeting
    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey")
    ) {

        return `
            <strong>Hello! 👋</strong><br><br>

            I am BIS SmartGuide.<br><br>

            I can help you with:<br>
            • Product standards<br>
            • BIS certification guidance<br>
            • Product quality<br>
            • Consumer complaints<br>
            • Product verification
        `;
    }


    // Quality
    if (
        q.includes("quality") ||
        q.includes("safe")
    ) {

        return `
            <strong>Product Quality:</strong><br><br>

            Product quality can involve safety,
            performance, reliability and compliance
            with applicable standards.<br><br>

            Indian Standards help define common
            requirements and specifications for
            many products.
        `;
    }


    // Fake / Genuine
    if (
        q.includes("fake") ||
        q.includes("genuine") ||
        q.includes("original")
    ) {

        return `
            <strong>Product Verification Guidance:</strong><br><br>

            If you want to verify a BIS mark,
            certification or product claim,
            use the appropriate official BIS
            verification resources.<br><br>

            Do not rely only on the visual
            appearance of a mark.
        `;
    }


    // Complaint
    if (
        q.includes("consumer complaint") ||
        q.includes("complaint")
    ) {

        return `
            <strong>Consumer Complaint Guidance:</strong><br><br>

            Keep your product information,
            purchase details, invoice and other
            supporting documents.<br><br>

            Use the appropriate official BIS
            consumer complaint channel.
        `;
    }


    // Standard
    if (
        q.includes("standard") ||
        q.includes("is code") ||
        q.includes("indian standard")
    ) {

        return `
            <strong>Indian Standards:</strong><br><br>

            An Indian Standard provides technical
            requirements or specifications for a
            particular product, service or process.<br><br>

            The applicable standard depends on
            the exact product and specifications.
        `;
    }


    // BIS
    if (
        q.includes("bis") ||
        q.includes("certification")
    ) {

        return `
            <strong>BIS Certification:</strong><br><br>

            BIS certification helps demonstrate
            conformity with applicable Indian
            Standards for products covered by
            relevant certification schemes.<br><br>

            Requirements depend on the product
            and applicable regulations.
        `;
    }


    // Product search from dataset
    for (let i = 0; i < bisDataset.length; i++) {

        if (
            q.includes(
                bisDataset[i].product.toLowerCase()
            )
        ) {

            const item = bisDataset[i];

            return `
                <strong>${item.product}</strong><br><br>

                <strong>Category:</strong>
                ${item.category}<br><br>

                <strong>Status:</strong>
                ${item.status}<br><br>

                <strong>Guidance:</strong>
                ${item.guidance}
            `;
        }
    }


    // Default response
    return `
        <strong>BIS SmartGuide:</strong><br><br>

        I can help with general information about:<br><br>

        • BIS Standards<br>
        • Product certification<br>
        • Product quality<br>
        • Product verification<br>
        • Consumer complaints<br><br>

        Try asking something like:<br>
        "What is BIS certification?"<br>
        "Tell me about LED Light"<br>
        "How can I verify a genuine product?"
    `;
}


// ======================================
// POPULAR CONSUMER QUESTION
// ======================================

function askConsumerQuestion(question) {

    const input =
        document.getElementById("consumerInput");

    if (!input) {
        console.error("consumerInput not found");
        return;
    }

    input.value = question;

    sendConsumerMessage();
}


// ======================================
// INDUSTRY CHATBOT
// ======================================

function sendIndustryMessage() {

    const input =
        document.getElementById("industryInput");

    if (!input) {
        console.error("industryInput not found");
        return;
    }

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(
        "industryMessages",
        message,
        "user-message"
    );

    input.value = "";

    setTimeout(function () {

        const response =
            generateIndustryResponse(message);

        addMessage(
            "industryMessages",
            response,
            "ai-message"
        );

    }, 500);
}


// ======================================
// INDUSTRY RESPONSE
// ======================================

function generateIndustryResponse(question) {

    const q =
        question.toLowerCase();


    // Greeting
    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey")
    ) {

        return `
            <strong>Hello!</strong><br><br>

            I am the BIS SmartGuide Industry
            Assistant.<br><br>

            I can help with:<br>
            • Standards<br>
            • Certification<br>
            • Documentation<br>
            • Compliance process
        `;
    }


    // Documents
    if (
        q.includes("document") ||
        q.includes("documents")
    ) {

        return `
            <strong>Possible Document Categories:</strong><br><br>

            • Business Information<br>
            • Product Details<br>
            • Manufacturing Information<br>
            • Testing Documents<br>
            • Application Documents<br><br>

            Exact requirements depend on the
            product and certification scheme.
        `;
    }


    // Apply
    if (
        q.includes("apply") ||
        q.includes("application")
    ) {

        return `
            <strong>General Certification Process:</strong><br><br>

            1. Identify applicable standard<br>
            2. Check applicable requirements<br>
            3. Prepare required documents<br>
            4. Submit application<br>
            5. Complete applicable testing/inspection<br><br>

            Always verify the current official
            process for your specific product.
        `;
    }


    // Standard
    if (
        q.includes("standard") ||
        q.includes("is code")
    ) {

        return `
            <strong>Standard Guidance:</strong><br><br>

            The applicable Indian Standard depends
            on the exact product category,
            specifications and intended use.<br><br>

            Use the Smart Standard Finder for
            prototype guidance and verify final
            information through official BIS sources.
        `;
    }


    // Certification
    if (
        q.includes("certification") ||
        q.includes("certificate")
    ) {

        return `
            <strong>Certification Guidance:</strong><br><br>

            Certification requirements depend on
            the product category and applicable
            regulations.<br><br>

            Start by identifying the relevant
            standard and then check the current
            official BIS requirements.
        `;
    }


    // Compliance
    if (
        q.includes("compliance") ||
        q.includes("requirement")
    ) {

        return `
            <strong>Compliance Guidance:</strong><br><br>

            Compliance normally involves identifying
            applicable standards, understanding
            technical requirements, completing
            applicable testing and maintaining
            required documentation.<br><br>

            Exact requirements vary by product.
        `;
    }


    // Default
    return `
        <strong>BIS Industry Assistant:</strong><br><br>

        I can help you with:<br><br>

        • Standards<br>
        • Certification guidance<br>
        • Documentation<br>
        • Compliance processes<br>
        • Application guidance<br><br>

        Please ask your question.
    `;
}


// ======================================
// SMART STANDARD FINDER
// ======================================

function setProduct(product) {

    const input =
        document.getElementById("productInput");

    if (!input) {
        console.error("productInput not found");
        return;
    }

    input.value = product;
}


// ======================================
// FIND STANDARD
// ======================================

function findStandard() {

    const productInput =
        document.getElementById("productInput");

    const result =
        document.getElementById("standardResult");


    if (!productInput || !result) {

        console.error(
            "productInput or standardResult not found"
        );

        return;
    }


    const product =
        productInput.value.trim();


    // Empty input
    if (product === "") {

        result.innerHTML = `
            <div class="result-card">

                <h3>
                    Please enter a product name.
                </h3>

                <p>
                    Example: LED Light
                </p>

            </div>
        `;

        return;
    }


    const searchProduct =
        product.toLowerCase();


    // Search dataset
    const foundProduct =
        bisDataset.find(function (item) {

            return (
                item.product
                    .toLowerCase()
                    .includes(searchProduct)
            );

        });


    // Product found
    if (foundProduct) {

        result.innerHTML = `

            <div class="result-card">

                <h2>
                    🔎 Product Information
                </h2>

                <p>
                    <strong>Product:</strong><br>
                    ${foundProduct.product}
                </p>

                <p>
                    <strong>Category:</strong><br>
                    ${foundProduct.category}
                </p>

                <p>
                    <strong>Prototype Status:</strong><br>
                    ${foundProduct.status}
                </p>

                <p>
                    <strong>Guidance:</strong><br>
                    ${foundProduct.guidance}
                </p>

                <div class="warning">

                    ⚠️ This is prototype data.
                    Always verify official BIS
                    requirements before making
                    certification or compliance
                    decisions.

                </div>

            </div>

        `;

    }


    // Product NOT found
    else {

        result.innerHTML = `

            <div class="result-card">

                <h2>
                    ❌ Product Not Found
                </h2>

                <p>
                    We currently do not have
                    prototype data for:
                </p>

                <p>
                    <strong>${product}</strong>
                </p>

                <p>
                    Try one of these:
                </p>

                <p>
                    • LED Light<br>
                    • Electric Iron<br>
                    • Pressure Cooker<br>
                    • Water Bottle<br>
                    • Cement<br>
                    • Ceiling Fan<br>
                    • Mobile Charger
                </p>

                <div class="warning">

                    Future version:
                    AI + RAG can search verified
                    BIS documents dynamically.

                </div>

            </div>

        `;
    }
}


// ======================================
// ENTER KEY SUPPORT
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Consumer input
        const consumerInput =
            document.getElementById(
                "consumerInput"
            );


        if (consumerInput) {

            consumerInput.addEventListener(
                "keypress",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        sendConsumerMessage();

                    }

                }
            );

        }


        // Industry input
        const industryInput =
            document.getElementById(
                "industryInput"
            );


        if (industryInput) {

            industryInput.addEventListener(
                "keypress",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        sendIndustryMessage();

                    }

                }
            );

        }


        console.log(
            "BIS SmartGuide loaded successfully!"
        );

    }
);