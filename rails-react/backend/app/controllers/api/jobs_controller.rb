module Api
    class JobsController < ApplicationController
        def index
            jobs = Job.order(:id)
            render json: jobs
        end

        def create
            job = Job.new(job_params)
            
            if job.save
                render json: job, status: :created
            else
                render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
            end
        end

        private

        def job_params
            params.permit(:category, :salary, :title)
        end
    end
end