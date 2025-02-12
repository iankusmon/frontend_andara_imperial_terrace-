"use client"
import SimulasiPembayaranKpr from '@/components/SimulasiPembayaranKpr'

export default function KprCorner() {
  return (
    <>
      <SimulasiPembayaranKpr
      title={'Simulasi Pembayaran KPR'}
      endpoint={'api/customers/kpr_calculators'}
      />
    </>
  
  )
}
