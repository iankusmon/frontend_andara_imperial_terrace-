"use client"
import SimulasiKemampuanKpr from '@/components/SimulasiKemampuanKpr'

export default function KprCorner() {
  return (
    <>
      <SimulasiKemampuanKpr
      title={'Simulasi Kemampuan KPR'}
      endpoint={'https://api.andaraimperialterrace.co.id/api/customers/kpr_calculators'}
      />
    </>
  
  )
}
