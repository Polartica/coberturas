// $("#fileExplorer").ejFileExplorer({
//     fileTypes: "*.xls,*.xlsx ",
//     layout: "tile",
//     path: "D:/Spreadsheet/", //Physical path.
//     ajaxAction: "Spreadsheet/FileAccess",
//     width: "100%",
//     minWidth: "150px",
//     isResponsive: true,
//     beforeOpen: "onBeforeOpen"
// });
 
// $("#SpreadsheetDialog").ejDialog({
//     width: "80%",
//     showOnInit: false
// })
 
// $("#SpredsheetViewer").ejSpreadsheet()
 
// // Triggers before opening the file
// function onBeforeOpen(args) {
//     var ssDialog = $("#SpreadsheetDialog").data("ejDialog"), ssObj = $("#SpredsheetViewer").data("ejSpreadsheet");
//     if (args.itemType == "File" && (/\.(xls|xlsx)$/i).test(args.selectedItems[0].name)) {
//         var file = args.model.selectedFolder + args.model.selectedItems[0];
//         $.ajax({
//             url: "Spreadsheet/Import",
//             type: "POST",
//             dataType: "json",
//             data: { filePath: file },
//             success: function (data) {
//                 ssDialog.option("title", args.model.selectedItems[0]);
//                 ssDialog.open();
//                 ssObj.refresh();
//                 ssObj.loadFromJSON(data); // Load the JSON data to the spreadsheet
//             }
//         });
//         args.cancel = true;
//     }
// }