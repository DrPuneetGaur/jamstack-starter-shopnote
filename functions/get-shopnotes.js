const query = require("./utils/query");

const GET_SHOPNOTES = `
    query {
        allShopnotes {
        data {
            _id
            name
            description
            updatedAt
            items {
                data {
                    _id,
                    name,
                    checked,
                    urgent
                }
            }
        }
        }
    }
`;

exports.handler = async() => {
    const { data, errors } = await query(GET_SHOPNOTES);
    if(errors){
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ shopnotes: data.allShopnotes.data})
    }
}