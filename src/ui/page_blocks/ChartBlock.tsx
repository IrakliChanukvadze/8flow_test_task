import { BarChart } from '../components/Chart';
import { useChartData } from './hooks/useChartData';

// TODO replace this with a fetch request to /api/data
// const mockData = { datasetOne: [75, -30, -45, -90, 20, 30], datasetTwo: [15, -15, 25, -60, 80, 90] };

function ChartBlock() {
  // TODO show success/failure toast message
  const { dataRange, reset, setMax, setMin, data } = useChartData();

  return (
    <div>
      <div className='mb-12 flex items-center'>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Min</span>
          <input
            type='number'
            value={dataRange.min ? dataRange.min : ''}
            className='w-24 h-8 text-sm'
            onChange={setMin}
          />
        </div>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Max</span>
          <input
            type='number'
            value={dataRange.max ? dataRange.max : ''}
            className='w-24 h-8 text-sm'
            onChange={setMax}
          />
        </div>
        <div className='flex flex-col mx-4 pt-4 w-100'>
          <button
            onClick={reset}
            className='bg-blue-600 flex justify-center items-center h-10 text-center text-white border focus:outline-none focus:ring-4 font-sm rounded-lg text-sm px-5 py-1.9'>
            Reset
          </button>
        </div>
      </div>
      <div>
        {data ? (
          <BarChart
            width={600}
            height={300}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: data.datasetOne,
                  backgroundColor: 'rgb(255, 99, 132)',
                },
                {
                  label: 'Dataset 2',
                  data: data.datasetTwo,
                },
              ],
            }}
          />
        ) : (
          <div className='w-[600px] h-[300px]'>There is no data to display</div>
        )}
      </div>
    </div>
  );
}

export { ChartBlock };
