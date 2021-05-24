type TimeSeriesObj = {
  y: number
  x?: number
}

type TimeSeries = {
  median: TimeSeriesObj[]
  upper95: TimeSeriesObj[]
  lower05: TimeSeriesObj[]
}

type MapDate = {
  median: number
  upper95: number
  lower05: number
}

type TimeSeriesData = {
  labels?: number[]
  dataBad: number[]
  dataGood: number[]
  dataMedian: number[]
}

type TimeSeriesProps = {
  years: number
  initialSum: number
  fee: number
  mu: number
  sigma: number
  monthlySum: number
}

type TimeSeriesHookObjects = {
  chartData: TimeSeriesData
  tableData: TimeSeriesData
}

function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }): MapDate {
  const yearlyReturn = mu - fee
  const monthlyReturn = yearlyReturn / 12
  const month = t * 12

  const median =
    initialSum * Math.exp(yearlyReturn * t) +
    (monthlySum *
      Math.exp(monthlyReturn * (month - Math.floor(month))) *
      (Math.exp(monthlyReturn * Math.floor(month)) - 1.0)) /
      (Math.exp(monthlyReturn) - 1.0)

  const upper95 = Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645)
  const lower05 = Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)

  return {
    median,
    upper95,
    lower05
  }
}

function calculateTimeSeries({ years, mu, sigma, fee, initialSum, monthlySum }): TimeSeries {
  const series = []

  for (let k = 1; k <= 12 * years; ++k) {
    const mappedDate = mapDate({
      t: k / 12,
      mu,
      sigma,
      fee,
      initialSum,
      monthlySum
    })
    series.push(mappedDate)
  }

  const allSeries = {
    median: [],
    upper95: [],
    lower05: []
  }

  for (let k = 0; k < series.length; k++) {
    allSeries.median.push({ y: series[k].median, x: series[k].x })
    allSeries.upper95.push({ y: series[k].upper95, x: series[k].x })
    allSeries.lower05.push({ y: series[k].lower05, x: series[k].x })
  }
  return allSeries
}

function getData(timeSeries: TimeSeries): TimeSeriesData {
  const dataMedian = timeSeries.median.map((v) => v.y)
  const dataGood = timeSeries.upper95.map((v) => v.y)
  const dataBad = timeSeries.lower05.map((v) => v.y)
  return { dataBad, dataGood, dataMedian }
}

function getChartData(timeSeries: TimeSeries): TimeSeriesData {
  const { dataBad, dataGood, dataMedian } = getData(timeSeries)

  const labels = timeSeries.median.map((v, idx) => (idx % 12 === 0 ? idx / 12 : idx))

  return {
    labels,
    dataBad,
    dataGood,
    dataMedian
  }
}

function getTableData(timeSeries: TimeSeries): TimeSeriesData {
  const { dataBad, dataGood, dataMedian } = getData(timeSeries)
  const labels = timeSeries.median.map((v, idx) => idx)

  return {
    labels,
    dataBad,
    dataGood,
    dataMedian
  }
}

function useTimeSeries({ years, initialSum, fee, mu, sigma, monthlySum }: TimeSeriesProps): TimeSeriesHookObjects {
  const calculatedTimeSeries = calculateTimeSeries({
    years,
    mu,
    sigma,
    fee,
    initialSum,
    monthlySum
  })
  const chartData = getChartData(calculatedTimeSeries)
  const tableData = getTableData(calculatedTimeSeries)
  return { chartData, tableData }
}

export default useTimeSeries
