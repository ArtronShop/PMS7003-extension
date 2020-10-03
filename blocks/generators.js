Blockly.Python['pms7003_read'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import pms7003';

  var dropdown_clk = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');

  var code = `pms7003.read(${dropdown_clk})[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
