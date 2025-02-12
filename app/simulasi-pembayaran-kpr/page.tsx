"use client"
import SimulasiPembayaranKpr from '@/components/SimulasiPembayaranKpr'

export default function KprCorner() {
  return (
    <>
      <SimulasiPembayaranKpr
      title={'Simulasi Pembayaran KPR'}
      endpoint={' http://127.0.0.1:3000/api/customers/kpr_calculators'}
      />
    </>
  
  )
}
