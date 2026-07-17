import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/finance/')({
  component: FinancePage,
})


function FinancePage() {
    return (
        <div>
            fff
        </div>
    );
}
