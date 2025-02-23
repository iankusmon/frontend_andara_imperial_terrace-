"use client"
import SimulasiKelayakanKpr from '@/components/SimulasiKelayakanKpr'

export default function KprCorner() {
  return (
    <>
      <SimulasiKelayakanKpr
      title={'Simulasi Kelayakan KPR'}
      endpoint={'https://api.andaraimperialterrace.co.id/api/customers/kpr_calculators'}
      />
    </>
  
  )
}
