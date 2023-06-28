function doPost(e) {
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/your_spreadsheet_id/edit"); // Reemplaza "your_spreadsheet_id" con el ID de tu hoja de cálculo
    var sheet = ss.getSheets()[0];
    
    var checkboxValues = [];
    
    checkboxValues.push(e.parameter.nombre);
    checkboxValues.push(e.parameter.direccion);
  
    checkboxValues.push(e.parameter.nombre_admin);
    checkboxValues.push(e.parameter.ciudad_admin);
    checkboxValues.push(e.parameter.organizacion_admin);
    checkboxValues.push(e.parameter.telefono_admin);
    checkboxValues.push(e.parameter.correo_admin);
  
    checkboxValues.push(e.parameter.nombre_tecnico);
    checkboxValues.push(e.parameter.ciudad_tecnico);
    checkboxValues.push(e.parameter.telefono_tecnico);
    checkboxValues.push(e.parameter.correo_tecnico);
    checkboxValues.push(e.parameter.direccion_ip);
    checkboxValues.push(e.parameter.nserver);
    checkboxValues.push(e.parameter.inetnum);
    checkboxValues.push(e.parameter.dominio);

    checkboxValues.push(e.parameter.tipo_registro_a);
    checkboxValues.push(e.parameter.tipo_registro_mx);
    checkboxValues.push(e.parameter.tipo_registro_cname);
    checkboxValues.push(e.parameter.tipo_registro_txt);
    checkboxValues.push(e.parameter.tipo_registro_ptr);
    checkboxValues.push(e.parameter.tipo_registro_ns);
    
    var tipoRegistro = [];
    if (e.parameter['tipo-registro.ec-registro'] === 'on') {
      tipoRegistro.push('.ec-registro');
    }
    if (e.parameter['tipo-registro.com-registro'] === 'on') {
      tipoRegistro.push('.com-registro');
    }
    if (e.parameter['tipo-registro.org-registro'] === 'on') {
      tipoRegistro.push('.org-registro');
    }
    if (e.parameter['tipo-registro.onion-registro'] === 'on') {
      tipoRegistro.push('.onion-registro');
    }
    
    checkboxValues.push(tipoRegistro.join(', '));
    
    checkboxValues.push(e.parameter.dominio);
    
    sheet.appendRow(checkboxValues);
  
    return ContentService.createTextOutput("Datos enviados correctamente");
  }
  