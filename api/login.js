export default function handler(req, res) {

  const suppliers = {
    [process.env.MITSHUYOSHI_PASSWORD]:
      process.env.MITSHUYOSHI_URL,

    [process.env.ISA_PASSWORD]:
      process.env.ISA_URL,

    [process.env.MIWA_PASSWORD]:
      process.env.MIWA_URL,

    [process.env.MARUICHI_PASSWORD]:
      process.env.MARUICHII_URL,

    [process.env.TOSAMA_PASSWORD]:
      process.env.TOSAMA_URL,

    [process.env.SAGA_PASSWORD]:
      process.env.SAGA_URL,

    [process.env.SAI_PASSWORD]:
      process.env.SAI_URL,

    [process.env.AMA_PASSWORD]:
      process.env.AMA_URL,

    [process.env.INDOBOLT_PASSWORD]:
      process.env.INDOBOLT_URL,

    [process.env.HITOTSU_PASSWORD]:
      process.env.HITOTSU_URL,

    [process.env.MBT_PASSWORD]:
      process.env.MBT_URL,

    [process.env.DAEBAEK_PASSWORD]:
      process.env.DAEBAEK_URL,

    [process.env.MEIDOH_PASSWORD]:
      process.env.MEIDOH_URL,

    [process.env.TTMI_PASSWORD]:
      process.env.TTMI_URL,

    [process.env.SCI_PASSWORD]:
      process.env.SCI_URL,

    [process.env.MOSI_PASSWORD]:
      process.env.MOSI_URL,

    [process.env.JSSI_PASSWORD]:
      process.env.JSSI_URL,

    [process.env.MES_PASSWORD]:
      process.env.MES_URL,

    [process.env.GMSI_PASSWORD]:
      process.env.GMSI_URL
    
  };

  const { password } = req.body;

  if (suppliers[password]) {
    return res.status(200).json({
      success: true,
      redirect: suppliers[password]
    });
  }

  return res.status(401).json({
    success: false
  });
}
