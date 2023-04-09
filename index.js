require("dotenv").config();

const { AirtableService } = require("@npranto/airtable-service");

const init = async () => {
  const {
    airServiceLog,
    getAllRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord,
  } = AirtableService({
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
  });
  airServiceLog();

  const fetchedAllRecords = await getAllRecords();
  console.log(JSON.stringify({ fetchedAllRecords }, null, 2));

  // const fetchedRecordById = await getRecordById('recAVJwkYt5do8B3r');
  // console.log(JSON.stringify({ fetchedRecordById }, null, 2));

  // const createdRecord = await createRecord([
  //   {
  //     fields: {
  //       Name: "James",
  //       Age: "16",
  //     },
  //   },
  // ]);
  // console.log(JSON.stringify({ createdRecord }, null, 2));

  // const updatedRecord = await updateRecord("reczuho8Q3NVec5tK", {
  //   fields: {
  //     Name: "James",
  //     Age: "10",
  //   },
  // });
  // console.log(JSON.stringify({ updatedRecord }, null, 2));

  // const deletedRecord = await deleteRecord("recblitzgme0aA2op");
  // console.log(JSON.stringify({ deletedRecord }, null, 2));
};

init();
