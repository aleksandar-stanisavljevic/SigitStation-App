(function () {
    angular.module('starter').factory('InvoiceService', ['$q',  '$cordovaFile', '$ionicPlatform', InvoiceService]);

    function InvoiceService($q, $cordovaFile, $ionicPlatform) {
        function createPdf(invoice) {
            return $q(function (resolve, reject) {
                var dd = createDocumentDefinition(invoice);


                pdfMake.createPdf(dd).getBuffer(function (buffer) {
var utf8 = new Uint8Array(buffer); // Convert to UTF-8...
binaryArray = utf8.buffer; // Convert to Binary...

$cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "Sigit - radni izvestaj.pdf", binaryArray, true)
.then(function (success) {
console.log("pdf created");
}, function (error) {
console.log("error");
});
});


                // var pdf = pdfMake.createPdf(dd).download();

                // pdf.getBase64(function (output) {
                //     resolve(base64ToUint8Array(output));
                // });
            });
        }

        return {
            createPdf: createPdf
        };
    }

    function createDocumentDefinition(invoice) {

        var items = invoice.Items.map(function (item) {
            return [item.Description, item.Quantity, item.Price];
        });

        var dd = {
            pageOrientation: 'landscape',
            pageMargins: [ 10, 10, 10, 10 ],
        	content: [
        	    {
        	        table: {
        	            heights: [13, 4, 4],
        	            widths: [197, 136,320,126],
        	            	body: [
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    'Column ',
        					    {text: 'IZVEŠTAJ O PROIZVODNJI', style: 'tableHeader', fontSize: 26, rowSpan: 3, alignment: 'center'},
        					    {text: 'DATUM', style: 'tableHeader', fontSize: 9, alignment: 'left'},
        					],
        					[
        					    {text: 'BROJ NALOGA', style: 'tableHeader', fontSize: 9, rowSpan: 2, alignment: 'left'},
        					    {text: 'BROJ SERIJE', style: 'tableHeader', fontSize: 9, rowSpan: 2, alignment: 'left'},
        					     {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					      {text: 'SMENA', style: 'tableHeader', fontSize: 9, rowSpan: 2, alignment: 'left'},
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					     {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					      {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],

        				],
        	        }
        	    },
        		{

        			style: 'tableExample',
        			table: {
        			    heights: [9, 6],
        			    widths: [110, 20, 20, 20, 20,20, 20, 20,20, 20,20, 20, 20, 20, 20,20, 20, 20, 20, 20,20, 20, 20, 20, 20],
        				body: [
        					[
        					{text: 'NAZIV DELA', colSpan: 4,  fontSize: 8, alignment: 'left'},
        					{},
        					{},
        					{},
        					{text: 'INTERNA ŠIFRA', colSpan: 5, fontSize: 8, alignment: 'left'},
        					{},
        					{},
        					{},
        					{},
        					{text: 'KALUP', colSpan: 4, fontSize: 8, alignment: 'left'},
        					{},
        					{},
        					{},
        					{text: 'Vrsta proizvodnje', colSpan: 8, fontSize: 8, alignment: 'left'},
        					{},
        					{},
        					{},
        					{},
        					{},
        					{},
        					{},

        					{text: 'Broj proizvoda \npo kalupu (**)', colSpan: 4, fontSize: 7, alignment: 'left'},
        					{},
        					{},
        					{}
        					],
        					[
        					    {text: 'KONTROLA GREŠAKA', fontSize: 7, bold: true, alignment: 'center'},
        					    {text: '06', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '07', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '08', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '09', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '10', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '11', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '12', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '13', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '14', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '15', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '16', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '17', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '18', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '19', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '20', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '21', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '22', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '23', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '24', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '01', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '02', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '03', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '04', style: 'tableHeader',  fontSize: 6, alignment: 'center'},
        					    {text: '05', style: 'tableHeader',  fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7024 OGREBOTINE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7025 NERAVNINE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7026 TALASANJA', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7027 DEFORMACIJA / LOM', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7028 OBOJENI TRAGOVI', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7029 NEPOTPUNI KOMADI', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7030 OPEKOTINE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7031 NEUSAGLAŠENO ZAVARIVANJE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7032 NEPRAVILNA OBRADA IVICE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7033 NEPRAVILNA MONTAŽA', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7034 POKRETANJE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7035 DRUGO', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7036 NEČISTOĆE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7037 ZAPUŠENI OTVORI', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7038 MRLJE', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7039 RAVNOĆA', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '7040 TESTIRANJE KALUPA', fontSize: 6, bold: true, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					]
        				]
        			}
        		},
        		{
        		table: {
        		    widths: [110, 49, 20,20,20, 136, 136, 20, 49, 49, 49, 49],
        		    heights: [18, 7, 7, 7, 7, 7, 7, 7, 4, 4, 7, 7, 7, 7],
        				body: [
        					[
        					    {text: 'OPIS SIROVINE / KOMPONENTE', style: 'tableHeader', fontSize: 8, alignment: 'center'},
        					    {colSpan: 3, text: 'BROJ SERIJE SIROVINE / KOMPONENTE (broj odštampan na kartici o sledljivosti)', fontSize: 6, alignment: 'center'},
        					    {},
        					    {},
        					    {rowSpan: 14, text: ''},
        					    {text: 'PROIZVEDENI KOMADI:', fontSize: 8, alignment: 'left'},
        					    {text: 'BROJ KOMADA NA SAT:', fontSize: 8, alignment: 'left'},
        					    {rowSpan: 14, text: ''},
        					    {colSpan: 3, text: 'Registracija prekida proizvodnje', fontSize: 11, alignment: 'center'},
        					    'Column',
        					    'Column',
        					    {rowSpan: 14, text: ''}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {rowSpan: 2, text: 'USAGLAŠENI KOMADI:', fontSize: 8, alignment: 'left'},
        					    {rowSpan: 2, text: 'SUSPENDOVANI KOMADI:', fontSize: 8, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'VREME PREKIDA', style: 'tableHeader', fontSize: 7, colSpan: 2, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'UZROK (upisati šifru)', style: 'tableHeader', fontSize: 8, rowSpan: 2, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					     {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'Od', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: 'Do', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					     {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, rowSpan: 2, alignment: 'center'},
        					    {text: 'NEUSAGLAŠENI KOMADI:', style: 'tableHeader', fontSize: 8, rowSpan: 2, colSpan: 2, alignment: 'left'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					     {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, rowSpan: 2, alignment: 'center'},
        					    {text: 'VREME RADA OD:                                         VREME RADA DO:', style: 'tableHeader', fontSize: 8, rowSpan: 2, colSpan: 2, alignment: 'left'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					     {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, rowSpan: 3, alignment: 'center'},
        					    {text: 'RADNICI                                                         MATIČNI BROJ', style: 'tableHeader', fontSize: 8, rowSpan: 3, colSpan: 2, alignment: 'left'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: 'Zamena na radnom mestu', style: 'tableHeader', fontSize: 8, rowSpan: 6, alignment: 'center'},
        					     {text: 'Matični broj', style: 'tableHeader', fontSize: 6, rowSpan: 2,  alignment: 'center'},
        					    {text: 'Vreme zamene', style: 'tableHeader', fontSize: 4, colSpan: 2, alignment: 'center'},

        					    [{text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},{text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}],
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: 'Od', style: 'tableHeader', fontSize: 4, alignment: 'center'},
        					    {text: 'Do', style: 'tableHeader', fontSize: 4, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, rowSpan: 2, alignment: 'center'},
        					    {text: 'POTPIS ODGOVORNOG SMENE                 % KORIŠĆENJA RADNE SNAGE (*)', style: 'tableHeader', fontSize: 8, rowSpan:2, colSpan: 2, alignment: 'left'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, rowSpan: 2, alignment: 'center'},
        					    {text: 'POTPIS REVIZORA                                     MATIČNI BROJ', style: 'tableHeader', fontSize: 8, rowSpan: 2, colSpan: 2, alignment: 'left'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 2, alignment: 'center'},
        					    {},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, colSpan: 3, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},

        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],


        				],

        		    }
        		},
        		{
        		table: {
        		    widths: [110, 136, 136, 136, 136, 107],
        		    heights: [7, 7, 7, 7, 7, 7, 7],
        				body: [
        					[
        					    {text: 'UZROCI PREKIDA PROIZVODNJE', style: 'tableHeader', rowSpan: 7, fontSize: 10, alignment: 'center'},
        					    {text: 'ZAUSTAVLJANJE KALUPA', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: 'ZAUSTAVLJANJE MAŠINE', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: 'NEDOSTATAK SIROVINA I KOMPONENATA', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: 'POSEBNI SLUČAJEVI', style: 'tableHeader', fontSize: 7, alignment: 'center'},
        					    {text: 'ZAUSTAVLJANJE SISTEMA', style: 'tableHeader', fontSize: 7, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'PR01    TESTIRANJE KALUPA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'ET17    ODRŽAVANJE MAŠINE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM16    NEDOSTATAK SIROVINA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM21    MLEV. NA MAŠINI (zaustavljeno)', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'ET15    NESTANAK STRUJE', style: 'tableHeader', fontSize: 6, alignment: 'left'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'ST01    PROMENA KALUPA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'ST02    POKRETANJE MAŠINE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM19    NEDOSTATAK KOMPONENATA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'FM04    HLADNJAK VAN FUNKCIJE', style: 'tableHeader', fontSize: 6, alignment: 'left'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'ET18    ODRŽAVANJE KALUPA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM07    PROMENA BOJE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM03    ČEKANJE PORUDŽBINE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'ET40    REGULISANJE ROBOTA', style: 'tableHeader', fontSize: 6, alignment: 'left'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'ET29    OŠTEĆENJE KALUPA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM22    PUNJENJE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM03    NEDOSTATAK KONTEJNERA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'FM29    PROGRAMIRANI ZASTOJ', style: 'tableHeader', fontSize: 6, alignment: 'left'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'ET06    TOPLA KOMORA / PRIKLJUČCI', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM23    PAUZA ZA RUČAK', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					],
        					[
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: 'FM08    PROMENA VERZIJE', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: 'FM05    PROMENA RADNOG MESTA', style: 'tableHeader', fontSize: 6, alignment: 'left'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'},
        					    {text: '', style: 'tableHeader', fontSize: 6, alignment: 'center'}
        					]
        				],

        		    }
        		},
        		{
        		    text: '(*) % korišćenja radne snage: radnik angažovan na tri ili više mašina vredi 0,33 --- jedan radnik na dve mašine vredi 0,5 --- jedan radnik na jednoj mašini vredi 1 (popunjava šef smene)', style: 'tableHeader', fontSize: 7, alignment: 'center'
        		},
        		{
        		    text: '(**) Broj proizvoda po kalupu: 1 - kada je proizvod u kalupu jedinstven (iako je u više jezgara) --- 2 - za dva različita proizvoda u istom kalupu, npr. DX+SX (iako su u više jezgara) --- 3 - za tri različita proizvoda u istom kalupu itd.', style: 'tableHeader', fontSize: 7, alignment: 'center'
        		},
        		{
        		    text: 'NAPOMENA: Evidentirati na ovom obrascu samo izvršene aktivnosti tokom proizvodnje na referentnoj mašini. Ne registrovati ovde npr. promene kalupa na drugoj mašini.', style: 'tableHeader', fontSize: 7, alignment: 'center'
        		},
        		{
        		    text: 'MOD 10.23.12 SR Izveštaj o proizvodnji', style: 'tableHeader', fontSize: 5, alignment: 'left'
        		}
        	]
        }


        // var dd = {
        //     content: [
        //         { text: 'INVOICE', style: 'header' },
        //         { text: invoice.Date, alignment: 'right' },
        //
        //         { text: 'From', style: 'subheader' },
        //         invoice.AddressFrom.Name,
        //         invoice.AddressFrom.Address,
        //         invoice.AddressFrom.Country,
        //
        //         { text: 'To', style: 'subheader' },
        //         invoice.AddressTo.Name,
        //         invoice.AddressTo.Address,
        //         invoice.AddressTo.Country,
        //
        //         { text: 'Items', style: 'subheader' },
        //         {
        //             style: 'itemsTable',
        //             table: {
        //                 widths: ['*', 75, 75],
        //                 body: [
        //                     [
        //                         { text: 'Quantity', style: 'itemsTableHeader' },
        //                         { text: 'Quantity', style: 'itemsTableHeader' },
        //                         { text: 'Price', style: 'itemsTableHeader' },
        //                     ]
        //                 ].concat(items)
        //             }
        //         },
        //         {
        //             style: 'totalsTable',
        //             table: {
        //                 widths: ['*', 75, 75],
        //                 body: [
        //                     [
        //                         '',
        //                         'Subtotal',
        //                         invoice.Subtotal,
        //                     ],
        //                     [
        //                         '',
        //                         'Shipping',
        //                         invoice.Shipping,
        //                     ],
        //                     [
        //                         '',
        //                         'Total',
        //                         invoice.Total,
        //                     ]
        //                 ]
        //             },
        //             layout: 'noBorders'
        //         },
        //     ],
        //     styles: {
        //         header: {
        //             fontSize: 20,
        //             bold: true,
        //             margin: [0, 0, 0, 10],
        //             alignment: 'right'
        //         },
        //         subheader: {
        //             fontSize: 16,
        //             bold: true,
        //             margin: [0, 20, 0, 5]
        //         },
        //         itemsTable: {
        //             margin: [0, 5, 0, 15]
        //         },
        //         itemsTableHeader: {
        //             bold: true,
        //             fontSize: 13,
        //             color: 'black'
        //         },
        //         totalsTable: {
        //             bold: true,
        //             margin: [0, 30, 0, 0]
        //         }
        //     },
        //     defaultStyle: {
        //     }
        // }

        return dd;
    }

    function base64ToUint8Array(base64) {
        var raw = atob(base64);
        var uint8Array = new Uint8Array(raw.length);
        for (var i = 0; i < raw.length; i++) {
            uint8Array[i] = raw.charCodeAt(i);
        }
        return uint8Array;
    }
})();
