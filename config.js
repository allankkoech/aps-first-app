let {FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET, PORT} = process.env;

if(!FORGE_CLIENT_SECRET || !FORGE_CLIENT_ID) {
    console.warn("Missing some env variaves");
    process.exit(1);
}

FORGE_BUCKET = FORGE_BUCKET || `${FORGE_CLIENT_ID.toLowerCase()}-basic-app`;
PORT = PORT || 8080;

module.exports = {
    FORGE_CLIENT_ID,
    FORGE_CLIENT_SECRET,
    FORGE_BUCKET,
    PORT
};