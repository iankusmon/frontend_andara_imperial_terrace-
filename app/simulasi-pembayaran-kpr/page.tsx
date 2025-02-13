"use client"
import SimulasiPembayaranKpr from '@/components/SimulasiPembayaranKpr'

export default function KprCorner() {
  return (
    <>
      <SimulasiPembayaranKpr
      title={'Simulasi Pembayaran KPR'}
      endpoint={'https://api.andaraimperialterrace.co.id/api/customers/kpr_calculators'}
      />
    </>
  
  )
}
